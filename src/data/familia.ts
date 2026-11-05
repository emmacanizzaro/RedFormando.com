export type Congregacion = {
  nombre: string;
  pastores: string;
  domicilio: string;
  contacto: string;
};

export type Obrero = {
  nombre: string;
  ubicacion: string;
  contacto?: string;
};

export const congregaciones: Congregacion[] = [
  {
    nombre: "Piedra Angular",
    pastores: "María Cristina y José Gonzalez",
    domicilio: "Deloqui 78 - Ushuaia - Argentina",
    contacto: "+54 2901 408473",
  },
  {
    nombre: "Faro Comunidad de Fe",
    pastores: "Martín y Mariela Colivoro",
    domicilio: "Faro San Gregorio 1182 - Rada Tilly - Chubut - Argentina",
    contacto: "+54 2974 121091",
  },
  {
    nombre: "Vida Plena",
    pastores: "Milagros y Samuel Paez",
    domicilio: "Barinas - Venezuela",
    contacto: "+58 414 3542347",
  },
  {
    nombre: "Edén Iglesia O´Barco",
    pastores: "Liliana y Marcelo Cerimelli",
    domicilio: "Av. Marcelino Suarez 8, Bajo - O´Barco - Galicia - España",
    contacto: "+34 619 394772",
  },
  {
    nombre: "Centro Cristiano Mar del Plata",
    pastores: "Elvio Prida y Cristina Citadini",
    domicilio: "Castelli 3932 - Mar del Plata - Argentina",
    contacto: "+54 2235430365",
  },
  {
    nombre: "Centro Cristiano Es tu Gracia",
    pastores: "Luis e Isabel Sanmartin",
    domicilio:
      "Huergo 2475. B° Las Flores - Comodoro Rivadavia - Chubut - Argentina",
    contacto: "+54 2975 400935",
  },
  {
    nombre: "Centro Cristiano Sarmiento",
    pastores: "Hilda Rivas y Mauro Gutierrez",
    domicilio: "Rodolfo Mouzet 384 - Sarmiento - Chubut - Argentina",
    contacto: "+54 2974783272",
  },
  {
    nombre: "Edén Iglesia Blanes",
    pastores: "Romina y Maximiliano Severo",
    domicilio: "Carrer del Forn 16 - Blanes - Gerona - España",
    contacto: "+34 672 083797",
  },
  {
    nombre: "Centro Cristiano Malvinas Argentinas",
    pastores: "Guadalupe y Samuel Calviño",
    domicilio:
      "Gregoria Matorras 3920 - Río Grande - Tierra del Fuego - Argentina",
    contacto: "+54 2964 422150",
  },
  {
    nombre: "Comunidad Saetas",
    pastores: "Damaris Calviño y Menny Escobar",
    domicilio: "Monterrey - México",
    contacto: "+52 56 30063311",
  },
  {
    nombre: "Edén Iglesia Terrassa",
    pastores: "Ivana Calviño y Santiago Luque",
    domicilio: "Av. de Béjar 399 - Terrassa - Barcelona - España",
    contacto: "+34 604 132105",
  },
  {
    nombre: "Edén Iglesia Rubí",
    pastores: "Yeraldi y Diego Dimov",
    domicilio: "Lope de Vega 22 - Rubí - Barcelona - España",
    contacto: "+34 617 016 840",
  },
  {
    nombre: "Centro de Gracia",
    pastores: "Paola y Alfonso Guerrero",
    domicilio: "Manuel Camiña 158 - Ushuaia - Tierra del Fuego - Argentina",
    contacto: "+54 2901 487706",
  },
  {
    nombre: "Centro Cristiano Villa Gesell",
    pastores: "Josefa y Federico Ismael",
    domicilio: "Av. 8 n° 880 - Villa Gesell - Buenos Aires - Argentina",
    contacto: "+54 11 50106565",
  },
  {
    nombre: "Centro Cristiano Río Grande",
    pastores: "Guadalupe y Samuel Calviño",
    domicilio: "Rivadavia 836 - Río Grande - Tierra del Fuego - Argentina",
    contacto: "+54 2964 422150",
  },
  {
    nombre: "Centro Cristiano Austral",
    pastores: "Karen y Marcelo Rodríguez",
    domicilio: "Tolhuin 450 Río Grande - Tierra del Fuego - Argentina",
    contacto: "+54 2964 47 5917",
  },
  {
    nombre: "Centro Cristiano Tolhuin",
    pastores: "Cecilia y Jorge Gimenez",
    domicilio: "Tolhuin - Tierra del Fuego - Argentina",
    contacto: "+54 2964 502728",
  },
  {
    nombre: "Centro Cristiano Las Heras",
    pastores: "Patricia y Atilio Moyano",
    domicilio: "Jacinto Azpilicueta 2288 - Las Heras - Santa Cruz - Argentina",
    contacto: "+54 297 4129291",
  },
  {
    nombre: "Centro Cristiano Caleta Olivia",
    pastores: "Duilio Daquino y Naomi Navarro",
    domicilio: "Lavalle 64 - Caleta Olivia - Santa Cruz - Argentina",
    contacto: "+54 2235361193",
  },
  {
    nombre: "Centro Cristiano Rada Tilly",
    pastores: "Claudia y Pablo Alvear",
    domicilio: "Punta de Indio 888 - Rada Tilly - Chubut - Argentina",
    contacto: "+54 297 4714353",
  },
];

export const obreros: Obrero[] = [
  {
    nombre: "Marisa y Ruben Horen",
    ubicacion: "Godoy Cruz - Mendoza - Argentina",
    contacto: "+54 261 5931000",
  },
  {
    nombre: "Claudia y Julio Beneciano",
    ubicacion: "Tandil - Buenos Aires - Argentina",
  },
  {
    nombre: "Viviana Hoyo y Federico Osandón",
    ubicacion: "Rubí - Barcelona - España",
  },
  {
    nombre: "Victoria Cerimelli y Ezequiel Nahuelquin",
    ubicacion: "Terrassa - Barcelona - España",
  },
];
