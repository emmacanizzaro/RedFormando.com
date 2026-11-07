import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-5 pt-32 pb-24 text-center sm:px-8">
      <p className="text-5xl font-bold text-accent sm:text-6xl">404</p>
      <h1 className="mt-4 text-xl font-bold uppercase tracking-wide sm:text-2xl">
        Página no encontrada
      </h1>
      <div className="mt-4 h-0.5 w-12 bg-accent" aria-hidden />
      <p className="mt-6 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-accent px-8 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-accent hover:text-background"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
