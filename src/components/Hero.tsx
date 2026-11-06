import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-background relative flex flex-col items-center px-5 pt-28 pb-14 text-center sm:px-8 sm:pt-32 sm:pb-20">
      <div className="animate-fade-up [--delay:100ms] w-full max-w-[42rem] rounded-lg bg-white px-4 py-2 shadow-xl shadow-black/20 sm:px-6 sm:py-3">
        <Image
          src="/redformando-logo.png"
          alt="RedFormando, Familia Ministerial"
          width={1800}
          height={278}
          priority
          sizes="(min-width: 768px) 672px, calc(100vw - 56px)"
          className="h-auto w-full"
        />
      </div>

      <h1 className="hero-copy animate-fade-up [--delay:300ms] mt-8 max-w-4xl text-xl font-semibold leading-snug sm:mt-12 sm:text-2xl md:text-3xl">
        Somos una <em className="font-bold text-accent">Red</em>, estamos en
        permanente <em className="font-bold text-accent">Formación</em> y
        creemos en una profunda{" "}
        <em className="font-bold text-accent">Reforma</em> en el Cuerpo de
        Cristo.
      </h1>

      <div
        className="animate-fade-up [--delay:500ms] mt-6 h-0.5 w-12 bg-accent sm:mt-8"
        aria-hidden
      />

      <h2 className="hero-copy animate-fade-up [--delay:600ms] mt-6 max-w-3xl text-base font-bold uppercase tracking-wide sm:text-lg md:text-xl">
        Cielo Nuevo y Tierra Nueva
        <span className="mx-2 font-light text-accent" aria-hidden>
          |
        </span>
        <span className="block sm:inline">
          Palabra Apostólica Bienal 2026–2027
        </span>
      </h2>

      <p className="hero-copy animate-fade-up [--delay:750ms] mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
        Cielo Nuevo y Tierra Nueva implica que el cielo ha invadido la tierra y
        que la entrada de Cristo a la historia introduce un nuevo orden de
        existencia.
      </p>

      <Link
        href="/cielo-nuevo-tierra-nueva"
        className="animate-fade-up [--delay:900ms] mt-8 rounded-full border border-accent px-8 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-accent hover:text-background"
      >
        Ver más
      </Link>
    </section>
  );
}
