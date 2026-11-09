import PageRibbonRight from "@/components/PageRibbonRight";
import { congregaciones, obreros } from "@/data/familia";

const tel = (n: string) => `tel:${n.replace(/[^\d+]/g, "")}`;

const tableWrap =
  "overflow-hidden rounded-2xl border border-white/15 bg-white/5";
const th = "px-4 py-3 text-left text-xs font-bold text-white sm:text-sm";
const td = "px-4 py-1 text-sm leading-relaxed text-white/80 md:py-3";
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
    <main className="page-with-ribbon mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-24">
      <PageRibbonRight />
      <h1 className="animate-fade-up [--delay:100ms] text-xl font-bold uppercase tracking-wide sm:text-2xl md:text-3xl">
        Familia Ministerial
      </h1>
      <div
        className="animate-fade-up [--delay:200ms] mt-3 h-0.5 w-12 bg-accent"
        aria-hidden
      />

      <div className="mt-8 space-y-12">
        <section
          aria-labelledby="congregaciones"
          className="animate-fade-up [--delay:300ms]"
        >
          <h2
            id="congregaciones"
            className="mb-4 text-lg font-bold uppercase tracking-wide sm:text-xl"
          >
            Congregaciones
          </h2>
          <div className={tableWrap}>
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
                    className={`${row} block px-1 py-3 md:table-row md:p-0`}
                  >
                    <td
                      className={`${td} block font-semibold text-white md:table-cell md:font-normal md:text-white/80`}
                    >
                      {c.nombre}
                    </td>
                    <td className={`${td} block md:table-cell`}>
                      <span className="font-semibold text-white/60 md:hidden">
                        Pastores:{" "}
                      </span>
                      {c.pastores}
                    </td>
                    <td className={`${td} block md:table-cell`}>
                      <span className="font-semibold text-white/60 md:hidden">
                        Domicilio:{" "}
                      </span>
                      {c.domicilio}
                    </td>
                    <td className={`${td} block md:table-cell`}>
                      <span className="font-semibold text-white/60 md:hidden">
                        Contacto:{" "}
                      </span>
                      <Contacto value={c.contacto} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          aria-labelledby="obreros"
          className="animate-fade-up [--delay:400ms]"
        >
          <h2
            id="obreros"
            className="mb-4 text-lg font-bold uppercase tracking-wide sm:text-xl"
          >
            Obreros
          </h2>
          <div className={tableWrap}>
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
                    className={`${row} block px-1 py-3 md:table-row md:p-0`}
                  >
                    <td
                      className={`${td} block font-semibold text-white md:table-cell md:font-normal md:text-white/80`}
                    >
                      {o.nombre}
                    </td>
                    <td className={`${td} block md:table-cell`}>
                      <span className="font-semibold text-white/60 md:hidden">
                        Ubicación:{" "}
                      </span>
                      {o.ubicacion}
                    </td>
                    <td className={`${td} block md:table-cell`}>
                      <span className="font-semibold text-white/60 md:hidden">
                        Contacto:{" "}
                      </span>
                      <Contacto value={o.contacto} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
