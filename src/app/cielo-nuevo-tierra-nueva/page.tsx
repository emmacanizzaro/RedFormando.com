import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cielo Nuevo y Tierra Nueva | RedFormando",
  robots: { index: false, follow: false },
};

const points = [
  {
    title: "La revelación de Jesucristo.",
    text: "Apocalipsis muestra a Cristo revelado, no solo eventos futuros.",
  },
  {
    title: "Una nueva creación ya iniciada.",
    text: "En Cristo lo nuevo ya comenzó.",
  },
  {
    title: "El cielo invadiendo la tierra.",
    text: "El evangelio no anuncia escape, anuncia transformación.",
  },
  {
    title: "Una iglesia que vive desde lo celestial.",
    text: "El pueblo de Dios expresa hoy la realidad del Reino.",
  },
];

export default function CieloNuevoTierraNueva() {
  return (
    <main className="flex min-h-screen flex-col items-center px-5 pt-28 pb-16 text-center sm:px-8 sm:pb-24">
      <h1 className="animate-fade-up [--delay:250ms] max-w-3xl text-base font-bold uppercase tracking-wide sm:text-lg md:text-xl">
        Cielo Nuevo y Tierra Nueva
        <span className="mx-2 font-light text-accent" aria-hidden>
          |
        </span>
        <span className="block sm:inline">
          Palabra Apostólica Bienal 2026–2027
        </span>
      </h1>

      <Image
        src="/cielo-nuevo-tierra-nueva.png"
        alt="Cielo Nuevo y Tierra Nueva 2026–2027 - RedFormando Familia Ministerial"
        width={1695}
        height={768}
        priority
        sizes="(min-width: 1024px) 960px, 100vw"
        className="animate-scale-in [--delay:450ms] mt-8 h-auto w-full max-w-5xl rounded-2xl sm:mt-12"
      />

      <h2 className="animate-fade-up [--delay:800ms] mt-8 max-w-3xl text-base font-semibold leading-snug sm:mt-12 sm:text-lg md:text-xl">
        Cielo Nuevo y Tierra Nueva implica que el cielo ha invadido la tierra y
        que la entrada de Cristo a la historia introduce un nuevo orden de
        existencia.
      </h2>

      <div className="animate-fade-up [--delay:1000ms] mt-8 max-w-3xl space-y-5 text-sm leading-relaxed text-white/80 sm:mt-10 sm:text-base">
        <p>
          En este mensaje, el Apóstol Alberto Calviño presenta la visión
          espiritual que orientará a la iglesia durante el bienio 2026–2027. A
          partir de la revelación de Jesucristo, se expone que el evangelio no
          anuncia un escape del mundo, sino la irrupción del cielo en la tierra
          por medio de la obra redentora de Cristo.
        </p>
        <p>
          “Cielo Nuevo y Tierra Nueva” describe la nueva dimensión de vida
          inaugurada por la muerte y resurrección de Jesús, donde comienza una
          nueva creación y una nueva humanidad en Él. Esta palabra nos invita a
          la iglesia a comprender su identidad en Cristo y a vivir desde esa
          realidad presente, participando activamente en la manifestación del
          Reino de Dios.
        </p>
      </div>

      <div className="animate-fade-up [--delay:1200ms] mt-10 aspect-video w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/30 sm:mt-14">
        <iframe
          src="https://www.youtube-nocookie.com/embed/ltjMOEm246s?rel=0"
          title="Cielo Nuevo y Tierra Nueva - Palabra Apostólica Bienal 2026–2027"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
          className="h-full w-full"
        />
      </div>

      <p className="animate-fade-up [--delay:1300ms] mt-3 max-w-2xl text-xs leading-relaxed text-white/60 sm:text-sm">
        Desde el auditorio de Edén Iglesia en Terrassa, Barcelona, el Apóstol
        Alberto Calviño presenta la Palabra que orientará a la iglesia durante
        el bienio 2026–2027.
      </p>

      <div className="animate-fade-up [--delay:1400ms] mt-8 max-w-3xl space-y-5 text-sm leading-relaxed text-white/80 sm:mt-10 sm:text-base">
        <ul className="space-y-4 text-left">
          {points.map((p) => (
            <li key={p.title} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              <span>
                <strong className="font-semibold text-white">{p.title}</strong>{" "}
                <em>{p.text}</em>
              </span>
            </li>
          ))}
        </ul>

        <p>
          Todo esto está en el corazón del mensaje: la nueva creación no es solo
          una esperanza futura, sino una realidad presente inaugurada por Cristo
          y manifestada en su pueblo.
        </p>
      </div>

      <div className="animate-fade-up [--delay:1600ms] mt-10 flex w-full max-w-2xl flex-col items-stretch justify-center gap-4 sm:mt-12 sm:flex-row">
        <Link
          href="/recursos"
          className="flex-1 rounded-full border border-accent px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-accent hover:text-background"
        >
          Accedé al material disponible
        </Link>
        <Link
          href="/recursos"
          className="flex-1 rounded-full border border-accent px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-accent hover:text-background"
        >
          PDF gratuito para descargar
        </Link>
      </div>
    </main>
  );
}
