import type { Metadata } from "next";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import PageRibbonRight from "@/components/PageRibbonRight";
import Reveal from "@/components/Reveal";
import { formatPrice, recursos } from "@/data/recursos";

export const metadata: Metadata = {
  title: "Recursos | RedFormando",
  description: "Libros y fascículos de la Familia Ministerial RedFormando.",
};

export default function RecursosPage() {
  const categories = [
    { id: "libros", name: "Libros" },
    { id: "fasciculos", name: "Fascículos" },
  ] as const;

  return (
    <main className="page-with-ribbon mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-24">
      <PageRibbonRight />
      <h1 className="animate-fade-up [--delay:100ms] text-xl font-bold uppercase tracking-wide sm:text-2xl md:text-3xl">
        Recursos
      </h1>
      <div
        className="animate-fade-up [--delay:200ms] mt-3 h-0.5 w-12 bg-accent"
        aria-hidden
      />

      <div className="mt-10 space-y-16">
        {categories.map((category) => {
          const categoryResources = recursos.filter(
            (resource) => resource.category === category.id,
          );

          return (
            <section
              key={category.id}
              aria-labelledby={`category-${category.id}`}
            >
              <h2
                id={`category-${category.id}`}
                className="text-lg font-bold uppercase tracking-wide sm:text-xl"
              >
                {category.name}
              </h2>
              <div
                className="mt-3 h-0.5 w-12 bg-accent"
                aria-hidden
              />

              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                {categoryResources.map((resource, index) => (
                  <li key={resource.id}>
                    <Reveal
                      delay={(index % 4) * 120}
                      className="flex h-full flex-col"
                    >
                      <div className="rounded-2xl border-2 border-accent/60 bg-white/5 p-2 shadow-xl shadow-black/30">
                        <div className="relative aspect-[890/768] w-full overflow-hidden rounded-xl">
                          {resource.image ? (
                            <Image
                              src={resource.image}
                              alt={`Portada de ${resource.name}`}
                              fill
                              sizes="(min-width: 1024px) 280px, (min-width: 768px) 30vw, 45vw"
                              className="object-cover"
                            />
                          ) : (
                            <span className="absolute inset-0 flex items-center justify-center px-4 text-center text-[10px] uppercase tracking-widest text-white/50">
                              Portada
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="mt-4 text-base font-semibold leading-snug">
                        {resource.name}
                      </h3>
                      <p className="mt-1 text-base font-bold text-accent">
                        {formatPrice(resource.price, resource.currency)}
                      </p>

                      <AddToCartButton id={resource.id} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </main>
  );
}
