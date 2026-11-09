"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const subscribeScroll = (cb: () => void) => {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
};
const getScrolled = () => window.scrollY > 24;
const getServerScrolled = () => false;

const links = [
  { href: "/", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/familia-ministerial", label: "Familia Ministerial" },
  { href: "/recursos", label: "Recursos" },
  { href: "/entrenamiento", label: "Entrenamiento" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    getScrolled,
    getServerScrolled,
  );
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${ratio})`);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  const linkClass = (href: string) =>
    `relative whitespace-nowrap py-1.5 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors hover:text-accent ${
      pathname === href
        ? "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-accent"
        : ""
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-background/95 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Principal"
        className={`mx-auto flex max-w-[90rem] items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <div className="hidden w-[120px] shrink-0 xl:block" aria-hidden />

        <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkClass(l.href)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contacto"
          className="hidden w-[120px] shrink-0 rounded-full border border-accent px-4 py-2 text-center text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-accent hover:text-background lg:block"
        >
          Contacto
        </Link>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-accent/60 lg:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-white transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-white transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        inert={!open}
        className={`mx-3 overflow-hidden rounded-2xl border border-white/10 bg-background/95 backdrop-blur transition-all duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 p-4">
          {[...links, { href: "/#contacto", label: "Contacto" }].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-[0.1em] hover:bg-white/5 ${
                  pathname === l.href ? "text-accent" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        ref={progressRef}
        aria-hidden
        className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: "scaleX(0)" }}
      />
    </header>
  );
}
