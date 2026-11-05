import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { cursos } from "@/data/entrenamiento";

export const metadata: Metadata = {
  title: "Entrenamiento | RedFormando",
  description: "Cursos de formación del ministerio RedFormando.",
};

export default function EntrenamientoPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-24">
      <h1 className="animate-fade-up [--delay:100ms] text-xl font-bold uppercase tracking-wide sm:text-2xl md:text-3xl">
        Entrenamiento
      </h1>
      <div
        className="animate-fade-up [--delay:200ms] mt-3 h-0.5 w-12 bg-accent"
        aria-hidden
      />

      <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {cursos.map((c, i) => (
          <li key={c.id}>
            <Reveal delay={i * 150} className="h-full">
              <a
                href={c.href ?? "#"}
                {...(c.href
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col rounded-3xl border border-accent/40 bg-white/5 p-3 shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white/10"
              >
                <div className="relative aspect-[5/2] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#1b4a78] to-background">
                  {c.image ? (
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(min-width: 768px) 560px, 90vw"
                      className="object-cover"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-widest text-white/50">
                      Imagen
                    </span>
                  )}
                </div>
                <div className="px-3 pt-6 pb-4">
                  <h2 className="text-lg font-bold leading-snug text-accent sm:text-xl">
                    {c.name}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                    {c.description}
                  </p>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </main>
  );
}
