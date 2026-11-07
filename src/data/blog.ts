export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
  body: string[];
};

// Datos de ejemplo: se reemplazan por Sanity más adelante
export const posts: Post[] = [
  {
    slug: "mujer-virtuosa-iglesia-gloriosa",
    title: "Mujer Virtuosa / Iglesia Gloriosa",
    image: "/blog/mujer-virtuosa.jpg",
    excerpt:
      "Resumen de ejemplo de la entrada. Se reemplaza por el texto real.",
    body: [
      "Texto de ejemplo. Aquí irá el contenido completo de la entrada.",
      "Segundo párrafo de ejemplo para visualizar el diseño de lectura.",
    ],
  },
  {
    slug: "eclesiastes-parte-1",
    title: "Eclesiastés parte 1",
    image: "/blog/eclesiastes-1.jpg",
    excerpt:
      "Resumen de ejemplo de la entrada. Se reemplaza por el texto real.",
    body: [
      "Texto de ejemplo. Aquí irá el contenido completo de la entrada.",
      "Segundo párrafo de ejemplo para visualizar el diseño de lectura.",
    ],
  },
  {
    slug: "eclesiastes-parte-2",
    title: "Eclesiastés parte 2",
    image: "/blog/eclesiastes-2.jpg",
    excerpt:
      "Resumen de ejemplo de la entrada. Se reemplaza por el texto real.",
    body: [
      "Texto de ejemplo. Aquí irá el contenido completo de la entrada.",
      "Segundo párrafo de ejemplo para visualizar el diseño de lectura.",
    ],
  },
  {
    slug: "eclesiastes-parte-3",
    title: "Eclesiastés parte 3",
    image: "/blog/eclesiastes-3.jpg",
    excerpt:
      "Resumen de ejemplo de la entrada. Se reemplaza por el texto real.",
    body: [
      "Texto de ejemplo. Aquí irá el contenido completo de la entrada.",
      "Segundo párrafo de ejemplo para visualizar el diseño de lectura.",
    ],
  },
];
