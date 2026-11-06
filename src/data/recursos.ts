export type Recurso = {
  id: string;
  name: string;
  category: "libros" | "fasciculos";
  image?: string;
  price: number | null;
  currency: "ARS" | "USD" | "EUR";
};

// Precios pendientes: completar "price" (y "currency") de cada recurso
export const recursos: Recurso[] = [
  {
    id: "bendecidos-en-el",
    name: "Bendecidos en Él",
    category: "fasciculos",
    image: "/libros/bendecidos-en-el.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "la-oracion-en-el-espiritu",
    name: "La oración en el Espíritu",
    category: "libros",
    image: "/libros/la-oracion-en-el-espiritu.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "padre-nuestro",
    name: "Padre Nuestro",
    category: "libros",
    image: "/libros/padre-nuestro.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "el-ministerio-del-espiritu",
    name: "El Ministerio del Espíritu",
    category: "libros",
    image: "/libros/el-ministerio-del-espiritu.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "el-desierto-no-es-tu-destino",
    name: "El desierto no es tu destino",
    category: "libros",
    image: "/libros/el-desierto-no-es-tu-destino.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "tiempo-y-eternidad",
    name: "Tiempo y Eternidad",
    category: "libros",
    image: "/libros/tiempo-y-eternidad.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "el-evangelio-eterno",
    name: "El evangelio eterno",
    category: "fasciculos",
    image: "/libros/el-evangelio-eterno.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "justificados-por-gracia",
    name: "Justificados por Gracia",
    category: "fasciculos",
    image: "/libros/justificados-por-gracia.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "posicionados-en-la-santisima-fe",
    name: "Posicionados en la Santísima Fe",
    category: "fasciculos",
    image: "/libros/posicionados-en-la-santisima-fe.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "sitiados-por-la-religiosidad",
    name: "Sitiados por la religiosidad",
    category: "fasciculos",
    image: "/libros/sitiados-por-la-religiosidad.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "edificados-en-la-verdad",
    name: "Edificados en la verdad",
    category: "fasciculos",
    image: "/libros/edificados-en-la-verdad.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "built-in-the-truth",
    name: "Built in the Truth",
    category: "fasciculos",
    image: "/libros/built-in-the-truth.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "fieles-exactos-y-certeros",
    name: "Fieles, exactos y certeros",
    category: "libros",
    image: "/libros/fieles-exactos-y-certeros.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "administracion-y-dosificacion-de-la-palabra",
    name: "La Administración y Dosificación de la Palabra",
    category: "fasciculos",
    image: "/libros/administracion-y-dosificacion-de-la-palabra.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "manual-para-la-formacion-de-predicadores",
    name: "Manual para la formación de Predicadores",
    category: "fasciculos",
    image: "/libros/manual-para-la-formacion-de-predicadores.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "entrenamiento-para-equipos-de-alabanza",
    name: "Entrenamiento para equipos de alabanza",
    category: "fasciculos",
    image: "/libros/entrenamiento-para-equipos-de-alabanza.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "esencia-de-reino-sacerdocio-y-finanzas",
    name: "Esencia de Reino: Sacerdocio y Finanzas",
    category: "fasciculos",
    image: "/libros/esencia-de-reino-sacerdocio-y-finanzas.jpg",
    price: null,
    currency: "ARS",
  },
];

export const formatPrice = (
  price: number | null,
  currency: Recurso["currency"],
) =>
  price === null
    ? "Precio a confirmar"
    : new Intl.NumberFormat("es-AR", { style: "currency", currency }).format(
        price,
      );
