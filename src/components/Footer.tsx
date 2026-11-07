import Image from "next/image";
import Reveal from "./Reveal";

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/redformando", icon: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/redformando/", icon: "instagram" },
  { name: "YouTube", href: "https://www.youtube.com/@RedFormando", icon: "youtube" },
] as const;

const areas = [
  {
    name: "Campafuego",
    links: [
      {
        icon: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/campafuego/",
      },
      {
        icon: "youtube",
        label: "YouTube",
        href: "https://www.youtube.com/@Campafuego",
      },
    ],
  },
  {
    name: "Edén Música",
    links: [
      {
        icon: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/edenentrenamientos/",
      },
      {
        icon: "youtube",
        label: "YouTube",
        href: "https://www.youtube.com/@EdenEntrenamientos",
      },
    ],
  },
] as const;

function Icon({ name }: { name: (typeof socials)[number]["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    "aria-hidden": true,
  };
  if (name === "facebook")
    return (
      <svg {...common} fill="currentColor">
        <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.9S15.6 3.7 14.4 3.7c-2.6 0-4.2 1.6-4.2 4.4v2.4H7.5v3.3h2.7V22h3.3z" />
      </svg>
    );
  if (name === "instagram")
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  return (
    <svg {...common} fill="currentColor">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer relative isolate overflow-hidden border-t border-white/10">
      <Image
        src="/footer-cinta-03.png"
        alt=""
        aria-hidden
        width={700}
        height={467}
        className="footer-ribbon footer-ribbon-right"
      />
      <Image
        src="/footer-cinta-04.png"
        alt=""
        aria-hidden
        width={700}
        height={467}
        className="footer-ribbon footer-ribbon-left"
      />
      <Reveal className="footer-content">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3 md:items-center">
          <div className="flex flex-col items-center gap-5 text-center">
            <Image
              src="/redformando-footer-wordmark.png"
              alt="RedFormando"
              width={3052}
              height={350}
              className="h-auto w-56 max-w-full object-contain sm:w-64"
            />
            <ul className="flex items-center gap-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-colors hover:border-accent hover:bg-accent hover:text-background"
                  >
                    <Icon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-5 text-center">
            <p className="text-sm font-semibold sm:text-base">
              ¿Quieres hacer una donación a RedFormando?
            </p>
            {/* TODO: reemplazar por la página o link de donaciones cuando exista */}
            <a
              href="mailto:contacto@redformando.com?subject=Quiero%20hacer%20una%20donaci%C3%B3n"
              className="rounded-full border border-accent px-8 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-accent hover:text-background"
            >
              Donar
            </a>
            <p className="text-xs text-white/60 sm:text-sm">
              REDFORMANDO | Familia Ministerial
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] sm:text-base">
              Áreas Ministeriales
            </h3>
            <ul className="space-y-4 text-center">
              {areas.map((a) => (
                <li
                  key={a.name}
                  className="flex items-center justify-center gap-3"
                >
                  <span className="text-sm font-medium sm:text-base">
                    {a.name}
                  </span>
                  <span className="flex gap-2">
                    {a.links.map((l) => (
                      <a
                        key={l.icon}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${l.label} de ${a.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-colors hover:border-accent hover:bg-accent hover:text-background"
                      >
                        <Icon name={l.icon} />
                      </a>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
