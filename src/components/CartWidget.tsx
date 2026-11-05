"use client";

import Image from "next/image";
import { useEffect } from "react";
import { formatPrice, recursos } from "@/data/recursos";
import { setCartOpen, useCart, useCartOpen } from "@/lib/cart";

export default function CartWidget() {
  const { items, remove } = useCart();
  const open = useCartOpen();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setCartOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const selected = items
    .map((id) => recursos.find((r) => r.id === id))
    .filter((r) => r !== undefined);
  const allPriced = selected.every((r) => r.price !== null);
  const total = selected.reduce((sum, r) => sum + (r.price ?? 0), 0);
  const currency = selected[0]?.currency ?? "ARS";

  if (selected.length === 0 && !open) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setCartOpen(true)}
        aria-label={`Abrir carrito (${selected.length})`}
        className="fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-background shadow-xl shadow-black/40 transition-transform hover:scale-105"
      >
        Carrito
        <span className="rounded-full bg-background px-2 py-0.5 text-accent">
          {selected.length}
        </span>
      </button>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setCartOpen(false)}
        />
        <aside
          role="dialog"
          aria-label="Carrito"
          className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col border-l border-accent/30 bg-background shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <h2 className="text-lg font-bold uppercase tracking-wide">
              Tu carrito
            </h2>
            <button
              type="button"
              onClick={() => setCartOpen(false)}
              aria-label="Cerrar carrito"
              className="text-2xl leading-none text-white/70 hover:text-white"
            >
              ×
            </button>
          </div>

          <ul className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
            {selected.length === 0 && (
              <li className="text-sm text-white/70">El carrito está vacío.</li>
            )}
            {selected.map((r) => (
              <li key={r.id} className="flex items-center gap-4">
                <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg border border-accent/30">
                  {r.image && (
                    <Image
                      src={r.image}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-snug">{r.name}</p>
                  <p className="text-sm font-bold text-accent">
                    {formatPrice(r.price, r.currency)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => remove(r.id)}
                  className="text-xs uppercase tracking-wider text-white/60 hover:text-white"
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>

          <div className="space-y-3 border-t border-white/10 px-5 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="uppercase tracking-wide">Total</span>
              <span className="text-lg font-bold text-accent">
                {allPriced ? formatPrice(total, currency) : "A confirmar"}
              </span>
            </div>
            <button
              type="button"
              disabled
              className="w-full cursor-not-allowed rounded-full bg-accent/40 px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-background"
            >
              Finalizar compra (próximamente)
            </button>
            <p className="text-center text-xs text-white/50">
              Recibirás los libros en formato PDF.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
