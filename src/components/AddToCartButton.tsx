"use client";

import { setCartOpen, useCart } from "@/lib/cart";

export default function AddToCartButton({ id }: { id: string }) {
  const { has, add } = useCart();
  const inCart = has(id);

  return (
    <button
      type="button"
      onClick={() => (inCart ? setCartOpen(true) : add(id))}
      className={`mt-4 w-full rounded-full border border-accent px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
        inCart
          ? "bg-accent text-background"
          : "hover:bg-accent hover:text-background"
      }`}
    >
      {inCart ? "En el carrito ✓" : "Agregar al carrito"}
    </button>
  );
}
