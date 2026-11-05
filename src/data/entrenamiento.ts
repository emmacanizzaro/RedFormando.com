export type Curso = {
  id: string;
  name: string;
  description: string;
  image?: string;
  href?: string;
};

// Pendiente: href (link) de cada uno
export const cursos: Curso[] = [
  {
    id: "webinar",
    name: "WEBINAR",
    image: "/entrenamiento/webinar.webp",
    description:
      "Formación intensiva para activar líderes en su llamado y propósito.",
  },
  {
    id: "edmi",
    image: "/entrenamiento/edmi.webp",
    name: "EDMI (Escuela de Ministerio Internacional)",
    description:
      "Capacitar, formar y activar ministros competentes al diseño divino.",
  },
];
