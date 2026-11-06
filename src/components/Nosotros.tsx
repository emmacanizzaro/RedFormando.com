import Image from "next/image";
import Reveal from "./Reveal";

const paragraphs = [
  "En un tiempo donde las estructuras cambian y el mundo busca respuestas… una familia ministerial decidió formar, enviar y edificar con un propósito eterno.",
  "Así nació REDFORMANDO: una red de iglesias y obreros unidos por la visión de Cristo, el Reino de Dios y la transformación de las naciones.",
  "Guiados por el llamado y la fidelidad de sus fundadores, Ana y Alberto Calviño, este movimiento ha impactado vidas, levantado líderes y extendido su influencia más allá de las fronteras.",
  "Desde sus inicios en Argentina, REDFORMANDO ha sembrado con valentía en tierra fértil, estableciendo congregaciones en ciudades estratégicas de Argentina.",
  "Pero la visión no se detuvo ahí. España, México y Venezuela también han recibido el fruto de este llamado apostólico: familias restauradas, comunidades transformadas, y una nueva generación activada para el Reino.",
  "No se trata solo de plantar iglesias, sino de formar una familia espiritual que camina en comunión, honra y propósito.",
  "REDFORMANDO no es solo un nombre: es una identidad. Es un diseño. Es una casa para los que han sido llamados a colaborar en la Reforma que Él está produciendo en su Iglesia.",
];

const socials = [
  {
    name: "Alberto Calviño",
    facebook: "https://www.facebook.com/alberto.calvinio",
    instagram: "https://www.instagram.com/albertocalvinio/",
  },
  {
    name: "Ana Calviño",
    facebook: "https://www.facebook.com/adini2",
    instagram: "https://www.instagram.com/anacalvinio/",
  },
];

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.9S15.6 3.7 14.4 3.7c-2.6 0-4.2 1.6-4.2 4.4v2.4H7.5v3.3h2.7V22h3.3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const iconClass =
  "flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-colors hover:border-accent hover:bg-accent hover:text-background";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-10 sm:px-8 sm:py-16"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <h2 className="text-xl font-bold uppercase tracking-wide sm:text-2xl md:text-3xl">
            Nosotros
          </h2>
          <div className="mt-3 h-0.5 w-12 bg-accent" aria-hidden />
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-white/80 sm:text-base">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="overflow-hidden rounded-3xl rounded-br-[5rem] border border-accent/40 p-1.5 shadow-2xl shadow-black/40">
            <Image
              src="/alberto-y-ana.jpg"
              alt="Ana y Alberto Calviño, fundadores de RedFormando"
              width={768}
              height={1019}
              sizes="(min-width: 1024px) 400px, 90vw"
              className="h-auto w-full rounded-[1.25rem] rounded-br-[4.5rem]"
            />
          </div>

          <h3 className="mt-8 text-base font-bold sm:text-lg">
            Redes sociales
          </h3>
          <ul className="mt-3 space-y-3">
            {socials.map((s) => (
              <li
                key={s.name}
                className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3"
              >
                <span className="text-sm font-semibold sm:text-base">
                  {s.name}
                </span>
                <span className="flex gap-2">
                  <a
                    href={s.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Facebook de ${s.name}`}
                    className={iconClass}
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href={s.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram de ${s.name}`}
                    className={iconClass}
                  >
                    <InstagramIcon />
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
