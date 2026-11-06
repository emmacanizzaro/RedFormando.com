export type Curso = {
  id: string;
  name: string;
  description: string;
  image?: string;
  href?: string;
};

export const cursos: Curso[] = [
  {
    id: "webinar",
    name: "WEBINAR",
    image: "/entrenamiento/webinar.webp",
    href: "https://www.instagram.com/webinar_redformando/",
    description:
      "Formación intensiva para activar líderes en su llamado y propósito.",
  },
  {
    id: "edmi",
    image: "/entrenamiento/edmi.webp",
    name: "EDMI (Escuela de Ministerio Internacional)",
    href: "https://www.instagram.com/edm.internacional/",
    description:
      "Capacitar, formar y activar ministros competentes al diseño divino.",
  },
];
