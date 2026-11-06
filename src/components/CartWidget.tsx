"use client";

import Image from "next/image";
import { useActionState, useEffect, useRef, useState } from "react";
import {
  sendPurchaseRequest,
  type PurchaseRequestState,
} from "@/app/actions/purchase";
import { formatPrice, recursos } from "@/data/recursos";
import { setCartOpen, useCart, useCartOpen } from "@/lib/cart";

const initialPurchaseState: PurchaseRequestState = { status: "idle" };
const contactEmail = "contacto@redformando.com";

function PurchaseRequestForm({
  itemIds,
  itemNames,
  onSuccess,
}: {
  itemIds: string[];
  itemNames: string[];
  onSuccess: () => void;
}) {
  const [state, action, pending] = useActionState(
    sendPurchaseRequest,
    initialPurchaseState,
  );
  const handledSuccess = useRef(false);

  useEffect(() => {
    if (state.status === "success" && !handledSuccess.current) {
      handledSuccess.current = true;
      onSuccess();
    }
  }, [onSuccess, state.status]);

  const errors = state.errors ?? {};
  const fallbackBody = [
    "Hola, quisiera consultar por estos recursos:",
    "",
    ...itemNames.map((name) => `- ${name}`),
    "",
    "Por favor, confirmen precio, disponibilidad y forma de entrega.",
  ].join("\n");
  const fallbackHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
    "Solicitud de recursos RedFormando",
  )}&body=${encodeURIComponent(fallbackBody)}`;

  return (
    <form
      action={action}
      className="space-y-4 border-t border-white/10 px-5 py-5"
    >
      <input type="hidden" name="items" value={JSON.stringify(itemIds)} />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div>
        <label htmlFor="purchase-name" className="mb-1 block text-xs font-medium">
          Nombre y apellido
        </label>
        <input
          id="purchase-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "purchase-name-error" : undefined}
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
        {errors.name && (
          <p id="purchase-name-error" className="mt-1 text-xs text-red-300">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="purchase-email" className="mb-1 block text-xs font-medium">
          Email
        </label>
        <input
          id="purchase-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "purchase-email-error" : undefined}
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
        {errors.email && (
          <p id="purchase-email-error" className="mt-1 text-xs text-red-300">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="purchase-phone" className="mb-1 block text-xs font-medium">
          Teléfono <span className="text-white/50">(opcional)</span>
        </label>
        <input
          id="purchase-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={25}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "purchase-phone-error" : undefined}
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
        {errors.phone && (
          <p id="purchase-phone-error" className="mt-1 text-xs text-red-300">
            {errors.phone}
          </p>
        )}
      </div>

      {errors.items && (
        <p className="text-xs text-red-300" role="alert">
          {errors.items}
        </p>
      )}
      {state.status === "error" && (
        <div className="space-y-2" role="alert">
          <p className="text-sm text-red-200">{state.message}</p>
          <a
            href={fallbackHref}
            className="text-sm font-semibold text-accent underline underline-offset-4"
          >
            Enviar solicitud por email
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={pending || itemIds.length === 0}
        className="w-full rounded-full bg-accent px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? "Enviando solicitud…" : "Enviar solicitud"}
      </button>
      <p className="text-xs leading-relaxed text-white/60">
        Te contactaremos para confirmar precio, disponibilidad y forma de
        entrega. Esta solicitud no confirma una compra ni genera un cobro.
      </p>
    </form>
  );
}

export default function CartWidget() {
  const { items, remove, clear } = useCart();
  const open = useCartOpen();
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setRequestSent(false);
        setCartOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeCart = () => {
    setRequestSent(false);
    setCartOpen(false);
  };
  const handleSuccess = () => {
    clear();
    setRequestSent(true);
  };

  const selected = items
    .map((id) => recursos.find((resource) => resource.id === id))
    .filter((resource) => resource !== undefined);
  const selectedIds = selected.map((resource) => resource.id);
  const selectedNames = selected.map((resource) => resource.name);
  const currency = selected[0]?.currency;
  const allPricedInSameCurrency =
    selected.length > 0 &&
    selected.every(
      (resource) => resource.price !== null && resource.currency === currency,
    );
  const total = selected.reduce((sum, resource) => sum + (resource.price ?? 0), 0);

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
          onClick={closeCart}
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
              {requestSent ? "Solicitud enviada" : "Tu carrito"}
            </h2>
            <button
              type="button"
              onClick={closeCart}
              aria-label="Cerrar carrito"
              className="text-2xl leading-none text-white/70 hover:text-white"
            >
              ×
            </button>
          </div>

          {requestSent ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
              <p role="status" className="text-sm leading-relaxed text-white/80">
                Recibimos tu solicitud. Te contactaremos para confirmar precio,
                disponibilidad y forma de entrega. No se realizó ningún cobro.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="rounded-full border border-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-accent hover:text-background"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto">
                <ul className="space-y-4 px-5 py-4">
                  {selected.length === 0 && (
                    <li className="text-sm text-white/70">
                      El carrito está vacío.
                    </li>
                  )}
                  {selected.map((resource) => (
                    <li key={resource.id} className="flex items-center gap-4">
                      <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg border border-accent/30">
                        {resource.image && (
                          <Image
                            src={resource.image}
                            alt=""
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold leading-snug">
                          {resource.name}
                        </p>
                        <p className="text-sm font-bold text-accent">
                          {formatPrice(resource.price, resource.currency)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(resource.id)}
                        className="text-xs uppercase tracking-wider text-white/60 hover:text-white"
                      >
                        Quitar
                      </button>
                    </li>
                  ))}
                </ul>

                {selected.length > 0 && (
                  <PurchaseRequestForm
                    itemIds={selectedIds}
                    itemNames={selectedNames}
                    onSuccess={handleSuccess}
                  />
                )}
              </div>

              <div className="space-y-2 border-t border-white/10 px-5 py-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="uppercase tracking-wide">Total</span>
                  <span className="text-lg font-bold text-accent">
                    {allPricedInSameCurrency && currency
                      ? formatPrice(total, currency)
                      : "A confirmar"}
                  </span>
                </div>
                <p className="text-center text-xs leading-relaxed text-white/50">
                  El envío de esta solicitud no confirma una compra ni genera
                  un cobro.
                </p>
              </div>
            </>
          )}
        </aside>
      </div>
    </>
  );
}
