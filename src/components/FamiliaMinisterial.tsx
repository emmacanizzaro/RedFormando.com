import Image from "next/image";
import { congregaciones, obreros } from "@/data/familia";

const tel = (n: string) => `tel:${n.replace(/[^\d+]/g, "")}`;

const tableWrap =
  "overflow-hidden rounded-2xl border border-white/15 bg-white/5";
const th = "px-4 py-3 text-left text-xs font-bold text-white sm:text-sm";
const td = "px-4 py-3 text-xs text-white/80 sm:text-sm";
const row = "border-t border-white/10 transition-colors hover:bg-white/5";

function Contacto({ value }: { value?: string }) {
  if (!value) return <span className="text-white/60">Sin Contacto</span>;
  return (
    <a href={tel(value)} className="hover:text-accent">
      {value}
    </a>
  );
}

export default function FamiliaMinisterial() {
  return (
    <main className="page-with-abstract-background mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-24">
      <h1 className="animate-fade-up [--delay:100ms] text-xl font-bold uppercase tracking-wide sm:text-2xl md:text-3xl">
        Familia Ministerial
      </h1>
      <div
        className="animate-fade-up [--delay:200ms] mt-3 h-0.5 w-12 bg-accent"
        aria-hidden
      />

      <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-[1.15fr_1fr]">
        <div className={`animate-fade-up [--delay:300ms] ${tableWrap}`}>
          <table className="w-full border-collapse">
            <caption className="sr-only">Congregaciones</caption>
            <thead className="hidden bg-white/10 md:table-header-group">
              <tr>
                <th scope="col" className={th}>
                  Nombre de la Congregación
                </th>
                <th scope="col" className={th}>
                  Pastores
                </th>
                <th scope="col" className={th}>
                  Domicilio
                </th>
                <th scope="col" className={th}>
                  Contacto
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {congregaciones.map((c, i) => (
                <tr
                  key={`${c.nombre}-${i}`}
                  className={`${row} block px-1 py-2 md:table-row md:p-0`}
                >
                  <td
                    className={`${td} block font-semibold text-white md:table-cell md:font-normal md:text-white/80`}
                  >
                    {c.nombre}
                  </td>
                  <td className={`${td} block md:table-cell`}>{c.pastores}</td>
                  <td className={`${td} block md:table-cell`}>{c.domicilio}</td>
                  <td className={`${td} block md:table-cell`}>
                    <Contacto value={c.contacto} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-8">
          <div className={`animate-fade-up [--delay:400ms] ${tableWrap}`}>
            <table className="w-full border-collapse">
              <caption className="sr-only">Obreros</caption>
              <thead className="hidden bg-white/10 md:table-header-group">
                <tr>
                  <th scope="col" className={th}>
                    Nombre de los obreros
                  </th>
                  <th scope="col" className={th}>
                    Ubicación
                  </th>
                  <th scope="col" className={th}>
                    Contacto
                  </th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {obreros.map((o) => (
                  <tr
                    key={o.nombre}
                    className={`${row} block px-1 py-2 md:table-row md:p-0`}
                  >
                    <td
                      className={`${td} block font-semibold text-white md:table-cell md:font-normal md:text-white/80`}
                    >
                      {o.nombre}
                    </td>
                    <td className={`${td} block md:table-cell`}>
                      {o.ubicacion}
                    </td>
                    <td className={`${td} block md:table-cell`}>
                      <Contacto value={o.contacto} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="animate-scale-in [--delay:600ms] relative min-h-[28rem] flex-1 overflow-hidden rounded-3xl rounded-br-[5rem] border border-accent/40 p-1.5 shadow-2xl shadow-black/40">
            <div className="relative h-full min-h-[27rem] w-full overflow-hidden rounded-[1.25rem] rounded-br-[4.5rem]">
              <Image
                src="/familia.webp"
                alt="Familia Ministerial RedFormando"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover object-[50%_100%]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-[#0a2a3c] via-[#1b4a78]/80 to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
