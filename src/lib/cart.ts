"use client";

import { useSyncExternalStore } from "react";

const KEY = "rf-cart";
const EMPTY: string[] = [];

let cache: string[] | null = null;
const listeners = new Set<() => void>();

function read(): string[] {
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    cache = Array.isArray(parsed)
      ? parsed.filter((x): x is string => typeof x === "string")
      : [];
  } catch {
    cache = [];
  }
  return cache;
}

function write(next: string[]) {
  cache = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {}
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      cb();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

export function useCart() {
  const items = useSyncExternalStore(subscribe, read, () => EMPTY);
  return {
    items,
    has: (id: string) => items.includes(id),
    add: (id: string) => {
      if (!items.includes(id)) write([...items, id]);
    },
    remove: (id: string) => write(items.filter((x) => x !== id)),
    clear: () => write([]),
  };
}

const drawerListeners = new Set<() => void>();
let drawerOpen = false;

export function setCartOpen(open: boolean) {
  drawerOpen = open;
  drawerListeners.forEach((l) => l());
}

export function useCartOpen() {
  return useSyncExternalStore(
    (cb) => {
      drawerListeners.add(cb);
      return () => {
        drawerListeners.delete(cb);
      };
    },
    () => drawerOpen,
    () => false,
  );
}
