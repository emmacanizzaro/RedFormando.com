export type Recurso = {
  id: string;
  name: string;
  image?: string;
  price: number | null;
  currency: "ARS" | "USD" | "EUR";
};

// Precios pendientes: completar "price" (y "currency") de cada libro
export const recursos: Recurso[] = [
  {
    id: "bendecidos-en-el",
    name: "Bendecidos en Él",
    image: "/libros/bendecidos-en-el.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "la-oracion-en-el-espiritu",
    name: "La oración en el Espíritu",
    image: "/libros/la-oracion-en-el-espiritu.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "padre-nuestro",
    name: "Padre Nuestro",
    image: "/libros/padre-nuestro.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "el-ministerio-del-espiritu",
    name: "El Ministerio del Espíritu",
    image: "/libros/el-ministerio-del-espiritu.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "el-desierto-no-es-tu-destino",
    name: "El desierto no es tu destino",
    image: "/libros/el-desierto-no-es-tu-destino.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "tiempo-y-eternidad",
    name: "Tiempo y Eternidad",
    image: "/libros/tiempo-y-eternidad.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "el-evangelio-eterno",
    name: "El evangelio eterno",
    image: "/libros/el-evangelio-eterno.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "justificados-por-gracia",
    name: "Justificados por Gracia",
    image: "/libros/justificados-por-gracia.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "posicionados-en-la-santisima-fe",
    name: "Posicionados en la Santísima Fe",
    image: "/libros/posicionados-en-la-santisima-fe.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "sitiados-por-la-religiosidad",
    name: "Sitiados por la religiosidad",
    image: "/libros/sitiados-por-la-religiosidad.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "edificados-en-la-verdad",
    name: "Edificados en la verdad",
    image: "/libros/edificados-en-la-verdad.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "built-in-the-truth",
    name: "Built in the Truth",
    image: "/libros/built-in-the-truth.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "fieles-exactos-y-certeros",
    name: "Fieles, exactos y certeros",
    image: "/libros/fieles-exactos-y-certeros.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "administracion-y-dosificacion-de-la-palabra",
    name: "La Administración y Dosificación de la Palabra",
    image: "/libros/administracion-y-dosificacion-de-la-palabra.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "manual-para-la-formacion-de-predicadores",
    name: "Manual para la formación de Predicadores",
    image: "/libros/manual-para-la-formacion-de-predicadores.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "entrenamiento-para-equipos-de-alabanza",
    name: "Entrenamiento para equipos de alabanza",
    image: "/libros/entrenamiento-para-equipos-de-alabanza.jpg",
    price: null,
    currency: "ARS",
  },
  {
    id: "esencia-de-reino-sacerdocio-y-finanzas",
    name: "Esencia de Reino: Sacerdocio y Finanzas",
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
