export const recetas = [
  {
    id: 0,
    id_usuario: 0,
    nombre_usuario: "Juan Manuel Fangio",
    imagen:
      "https://www.semana.com/resizer/v2/CBUJV763ORE2VENVF5HWJYWPQA.jpg?auth=282369669486f101ef91c99b4fb3cebcca0cc5a01d54a1baec7230089b2e7945&smart=true&quality=75&width=1280&height=720",
    nombre: "Lasagna a la carbonara",
    categoria: ["Pastas", "Tardicionales"],
    tiempo_preparacion: 10,
    tiempo_coccion: 20,
    dificultad: "medio",
    descripcion: [
      "Primero se cocina la pasta de carbonara, añadiendo el queso y la sal y cociendo hasta que esté bien cocido.",
      "Luego se cocina la pasta de lasagna, añadiendo el queso y la sal y cociendo hasta que esté bien cocido.",
      "Se deja cocinar la pasta de lasagna, añadiendo la harina de trigo y la cebolla.",
      "Se preparan unos mateicos",
      "Se va a comprar unas facturas",
      "Se le entra como lima vieja",
    ],
    ingredientes: [
      {
        nombre: "harina",
        cantidad: 1,
        medida: "taza",
      },
      {
        nombre: "queso",
        cantidad: 2,
        medida: "taza",
      },
      {
        nombre: "cebolla",
        cantidad: 1,
        medida: "taza",
      },
    ],
    rating: 4,
    favoritos: 10,
    notas: "Esta receta es muy buena",
  },
  {
    id: 10,
    id_usuario: 3,
    nombre_usuario: "Michael Schumacher Fangio",
    imagen:
      "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg?w=400&h=300&c=crop",
    nombre: "Verduras al plato",
    categoria: ["Italia", "Tardicionales"],
    tiempo_preparacion: 10,
    tiempo_coccion: 20,
    dificultad: "medio",
    descripcion: [
      "Primero se corta la verdura y se la pica en trozos pequeños.",
      "Se corta la cebolla y se la pica en trozos pequeños.",
      "Se corta la tomate y se la pica en trozos pequeños.",
      "Se corta la cebolla y se la pica en trozos pequeños.",
      "Se corta la tomate y se la pica en trozos pequeños.",
    ],
    ingredientes: [
      {
        nombre: "tomate",
        cantidad: 1,
        medida: "unidad",
      },
      {
        nombre: "cebolla",
        cantidad: 1,
        medida: "unidad",
      },
      {
        nombre: "verdura",
        cantidad: 1,
        medida: "unidad",
      },
    ],
    rating: 2,
    favoritos: 34,
    notas: "Esta receta la puede hacer un mono ciego",
  },
  {
    id: 11,
    id_usuario: 3,
    nombre_usuario: "Max Verstappen",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMyzfmXp2bWMGCMLw2JC4uXpXR1qEGTCBvw&s",
    nombre: "Haburguesas tapa arterias",
    categoria: ["Rapidas", "Pan"],
    tiempo_preparacion: 20,
    tiempo_coccion: 30,
    dificultad: "medio",
    descripcion: [
      "Primero se cocina la cebolla, añadiendo el aceite y la sal y cociendo hasta que esté bien cocido.",
      "Se preparan las haburguesas, añadiendo el aceite y la sal y cociendo hasta que esté bien cocido.",
      "Esperar",
    ],
    ingredientes: [
      {
        nombre: "tomate",
        cantidad: 1,
        medida: "unidad",
      },
      {
        nombre: "cebolla",
        cantidad: 1,
        medida: "unidad",
      },
      {
        nombre: "Carne picada",
        cantidad: 1,
        medida: "unidad",
      },
    ],
    rating: 2,
    favoritos: 34,
    notas: "La carne picada no tiene punto blue, a menos que te quieras morir",
  },
  {
    id: 12,
    id_usuario: 1,
    nombre_usuario: "Juan Manuel Fangio",
    imagen:
      "https://www.semana.com/resizer/v2/CBUJV763ORE2VENVF5HWJYWPQA.jpg?auth=282369669486f101ef91c99b4fb3cebcca0cc5a01d54a1baec7230089b2e7945&smart=true&quality=75&width=1280&height=720",
    nombre: "Lasagna a la carbonara, la mejor de todas",
    categoria: [
      "Pastas",
      "Italia",
      "Tardicionales",
    ],
    tiempo_preparacion: 10,
    tiempo_coccion: 20,
    dificultad: "medio",
    descripcion: [
      "Primero se cocina la pasta de carbonara, añadiendo el queso y la sal y cociendo hasta que esté bien cocido.",
      "Luego se cocina la pasta de lasagna, añadiendo el queso y la sal y cociendo hasta que esté bien cocido.",
      "Se deja cocinar la pasta de lasagna, añadiendo la harina de trigo y la cebolla.",
      "Se preparan unos mateicos",
      "Se va a comprar unas facturas",
      "Se le entra como lima vieja",
    ],
    ingredientes: [
      {
        nombre: "harina",
        cantidad: 1,
        medida: "taza",
      },
      {
        nombre: "queso",
        cantidad: 2,
        medida: "taza",
      },
      {
        nombre: "cebolla",
        cantidad: 1,
        medida: "taza",
      },
    ],
    rating: 4,
    favoritos: 10,
    notas: "Esta receta es muy buena",
  },
  {
    id: 1,
    nombre: "Spaghetti a la Bolognesa",
    categoria: ["Pastas", "Tradicionales"],
    tiempo_preparacion: 15,
    tiempo_coccion: 30,
    dificultad: "medio",
    descripcion: [
      "Cocina el spaghetti en agua con sal hasta que esté al dente.",
      "En una sartén, sofríe la cebolla y el ajo hasta que estén dorados.",
      "Añade la carne molida y cocina hasta que esté bien cocida.",
      "Agrega la salsa de tomate y deja cocinar a fuego lento.",
      "Mezcla la pasta con la salsa y sirve caliente.",
    ],
    ingredientes: [
      { nombre: "harina", cantidad: 1, medida: "taza" },
      { nombre: "queso", cantidad: 100, medida: "gr" },
      { nombre: "cebolla", cantidad: 1, medida: "unidad" },
      { nombre: "ajo", cantidad: 2, medida: "dientes" },
      { nombre: "carne molida", cantidad: 200, medida: "gr" },
      { nombre: "salsa de tomate", cantidad: 1, medida: "taza" },
    ],
    rating: 4.5,
    favoritos: 15,
    notas: "Esta receta es ideal para una cena familiar.",
  },
  {
    id: 2,
    nombre: "Fettuccine Alfredo",
    categoria: ["Pastas"],
    tiempo_preparacion: 10,
    tiempo_coccion: 20,
    dificultad: "fácil",
    descripcion: [
      "Cocina el fettuccine en agua con sal hasta que esté al dente.",
      "En una sartén, derrite la mantequilla y añade la crema de leche.",
      "Agrega el queso parmesano y mezcla hasta obtener una salsa cremosa.",
      "Mezcla la pasta con la salsa y sirve caliente.",
    ],
    ingredientes: [
      { nombre: "harina", cantidad: 1, medida: "taza" },
      { nombre: "queso parmesano", cantidad: 100, medida: "gr" },
      { nombre: "mantequilla", cantidad: 50, medida: "gr" },
      { nombre: "crema de leche", cantidad: 1, medida: "taza" },
    ],
    rating: 4.7,
    favoritos: 20,
    notas: "Perfecto para una comida rápida y deliciosa.",
  },
  {
    id: 3,
    nombre: "Penne al Pesto",
    categoria: ["Pastas"],
    tiempo_preparacion: 10,
    tiempo_coccion: 15,
    dificultad: "fácil",
    descripcion: [
      "Cocina el penne en agua con sal hasta que esté al dente.",
      "En una licuadora, mezcla albahaca, ajo, piñones, queso parmesano y aceite de oliva hasta obtener una salsa.",
      "Mezcla la pasta con la salsa de pesto y sirve caliente.",
    ],
    ingredientes: [
      { nombre: "harina", cantidad: 1, medida: "taza" },
      { nombre: "queso parmesano", cantidad: 100, medida: "gr" },
      { nombre: "albahaca", cantidad: 1, medida: "taza" },
      { nombre: "ajo", cantidad: 2, medida: "dientes" },
      { nombre: "piñones", cantidad: 50, medida: "gr" },
      { nombre: "aceite de oliva", cantidad: 0.5, medida: "taza" },
    ],
    rating: 4.8,
    favoritos: 25,
    notas: "Ideal para los amantes de los sabores frescos.",
  },
  {
    id: 4,
    nombre: "Lasagna de Espinacas",
    categoria: ["Pastas", "Tradicionales"],
    tiempo_preparacion: 20,
    tiempo_coccion: 40,
    dificultad: "medio",
    descripcion: [
      "Cocina las láminas de lasagna en agua con sal hasta que estén al dente.",
      "En una sartén, sofríe la cebolla y el ajo, añade las espinacas y cocina hasta que estén tiernas.",
      "En una fuente para horno, alterna capas de lasagna, espinacas y queso ricotta.",
      "Hornea a 180°C durante 20 minutos.",
    ],
    ingredientes: [
      { nombre: "harina", cantidad: 1, medida: "taza" },
      { nombre: "queso ricotta", cantidad: 200, medida: "gr" },
      { nombre: "espinacas", cantidad: 300, medida: "gr" },
      { nombre: "cebolla", cantidad: 1, medida: "unidad" },
      { nombre: "ajo", cantidad: 2, medida: "dientes" },
    ],
    rating: 4.6,
    favoritos: 18,
    notas: "Una opción vegetariana deliciosa.",
  },
  {
    id: 5,
    nombre: "Macarrones con Queso",
    categoria: ["Pastas"],
    tiempo_preparacion: 10,
    tiempo_coccion: 15,
    dificultad: "fácil",
    descripcion: [
      "Cocina los macarrones en agua con sal hasta que estén al dente.",
      "En una sartén, derrite la mantequilla y añade la harina, cocinando hasta obtener una roux.",
      "Agrega la leche y cocina hasta que espese.",
      "Añade el queso cheddar y mezcla hasta obtener una salsa cremosa.",
      "Mezcla la pasta con la salsa y sirve caliente.",
    ],
    ingredientes: [
      { nombre: "harina", cantidad: 1, medida: "taza" },
      { nombre: "queso cheddar", cantidad: 200, medida: "gr" },
      { nombre: "mantequilla", cantidad: 50, medida: "gr" },
      { nombre: "leche", cantidad: 2, medida: "tazas" },
    ],
    rating: 4.9,
    favoritos: 30,
    notas: "Un clásico que nunca falla.",
  },

  {
    id: 6,
    nombre: "Tortilla de Harina",
    categoria: ["Mexicanas"],
    tiempo_preparacion: 15,
    tiempo_coccion: 30,
    dificultad: "fácil",
    descripcion: [
      "Cocina la harina en agua con sal hasta que esté al dente.",
      "En una fuente para horno, derrite la mantequilla y añade la harina.",
      "Agrega la leche y cocina hasta que espese.",
      "Añade el azúcar y mezcla hasta obtener una salsa cremosa.",
      "Mezcla la pasta con la salsa y sirve caliente.",
    ],
    ingredientes: [
      { nombre: "harina", cantidad: 1, medida: "taza" },
      { nombre: "mantequilla", cantidad: 50, medida: "gr" },
      { nombre: "leche", cantidad: 2, medida: "tazas" },
      { nombre: "azúcar", cantidad: 50, medida: "gr" },
    ],
    rating: 4.7,
    favoritos: 20,
    notas: "Un clásico de la cocina mexicana.",
  },

  {
    id: 7,
    nombre: "Ceviche de Camaron",
    categoria: ["Mexicanas"],
    tiempo_preparacion: 15,
    tiempo_coccion: 30,
    dificultad: "fácil",
    descripcion: [
      "Cocina el camaroón en agua con sal hasta que esté al dente.",
      "En una fuente para horno, derrite la mantequilla y añade la harina.",
      "Agrega la leche y cocina hasta que espese.",
      "Añade el azúcar y mezcla hasta obtener una salsa cremosa.",
      "Mezcla la pasta con la salsa y sirve caliente.",
    ],
    ingredientes: [
      { nombre: "harina", cantidad: 1, medida: "taza" },
      { nombre: "mantequilla", cantidad: 50, medida: "gr" },
      { nombre: "leche", cantidad: 2, medida: "tazas" },
      { nombre: "azúcar", cantidad: 50, medida: "gr" },
    ],
    rating: 4.8,
    favoritos: 25,
    notas: "Un clásico de la cocina mexicana.",
  },

  {
    id: 8,
    nombre: "Tacos a la Plancha",
    categoria: ["Mexicanas"],
    tiempo_preparacion: 15,
    tiempo_coccion: 30,
    dificultad: "fácil",
    descripcion: [
      "Cocina la harina en agua con sal hasta que esté al dente.",
      "En una fuente para horno, derrite la mantequilla y añade la harina.",
      "Agrega la leche y cocina hasta que espese.",
      "Añade el azúcar y mezcla hasta obtener una salsa cremosa.",
      "Mezcla la pasta con la salsa y sirve caliente.",
    ],
    ingredientes: [
      { nombre: "harina", cantidad: 1, medida: "taza" },
      { nombre: "mantequilla", cantidad: 50, medida: "gr" },
      { nombre: "leche", cantidad: 2, medida: "tazas" },
      { nombre: "azúcar", cantidad: 50, medida: "gr" },
    ],
    rating: 4.9,
    favoritos: 30,
    notas: "Un clásico de la cocina mexicana.",
  },

  {
    id: 9,
    nombre: "Enchiladas de Pollo",
    categoria: ["Mexicanas"],
    tiempo_preparacion: 15,
    tiempo_coccion: 30,
    dificultad: "fácil",
    descripcion: [
      "Cocina el pollo en agua con sal hasta que esté al dente.",
      "En una fuente para horno, derrite la mantequilla y añade la harina.",
      "Poner en el horno a 180° durante 15 minutos.",
      "añadir el pollo y mezclar hasta obtener una salsa cremosa.",
      "Mezcla la pasta con la salsa y sirve caliente.",
    ],
    ingredientes: [
      { nombre: "harina", cantidad: 1, medida: "taza" },
      { nombre: "mantequilla", cantidad: 50, medida: "gr" },
      { nombre: "leche", cantidad: 2, medida: "tazas" },
      { nombre: "azúcar", cantidad: 50, medida: "gr" },
    ],
    rating: 4.6,
    favoritos: 15,
    notas: "Un clásico de la cocina mexicana.",
  },
  {
    id: 13,
    id_usuario: 3,
    nombre_usuario: "Michael Schumacher Fangio",
    imagen:
      "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg?w=400&h=300&c=crop",
    nombre: "Verduras al plato",
    categoria: ["Italia", "Tardicionales"],
    tiempo_preparacion: 10,
    tiempo_coccion: 20,
    dificultad: "medio",
    descripcion: [
      "Primero se corta la verdura y se la pica en trozos pequeños.",
      "Se corta la cebolla y se la pica en trozos pequeños.",
      "Se corta la tomate y se la pica en trozos pequeños.",
      "Se corta la cebolla y se la pica en trozos pequeños.",
      "Se corta la tomate y se la pica en trozos pequeños.",
    ],
    ingredientes: [
      {
        nombre: "tomate",
        cantidad: 1,
        medida: "unidad",
      },
      {
        nombre: "cebolla",
        cantidad: 1,
        medida: "unidad",
      },
      {
        nombre: "verdura",
        cantidad: 1,
        medida: "unidad",
      },
    ],
    rating: 2,
    favoritos: 34,
    notas: "Esta receta la puede hacer un mono ciego",
  },
  {
    id: 14,
    id_usuario: 3,
    nombre_usuario: "Max Verstappen",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMyzfmXp2bWMGCMLw2JC4uXpXR1qEGTCBvw&s",
    nombre: "Haburguesas tapa arterias",
    categoria: ["Rapidas", "Pan"],
    tiempo_preparacion: 20,
    tiempo_coccion: 30,
    dificultad: "medio",
    descripcion: [
      "Primero se cocina la cebolla, añadiendo el aceite y la sal y cociendo hasta que esté bien cocido.",
      "Se preparan las haburguesas, añadiendo el aceite y la sal y cociendo hasta que esté bien cocido.",
      "Esperar",
    ],
    ingredientes: [
      {
        nombre: "tomate",
        cantidad: 1,
        medida: "unidad",
      },
      {
        nombre: "cebolla",
        cantidad: 1,
        medida: "unidad",
      },
      {
        nombre: "Carne picada",
        cantidad: 1,
        medida: "unidad",
      },
    ],
    rating: 2,
    favoritos: 34,
    notas: "La carne picada no tiene punto blue, a menos que te quieras morir",
  },
];
