// definimos una lista de objetos

const catalogo = [
    {titulo: "La sombra del viento", autor: "Ruiz Zafón", disponible: true},
    {titulo: "Blackwatter", autor: "Michael McDowel", disponible: false},
    {titulo: "El hombre ilustrado", autor: "Ray", disponible: true},
]

// desestructurar un objeto
const { autor, titulo, editorial = "sin editorial"} = catalogo[0]; // le pongo valor por defecto para que no salga undefined si no lo encuentra
console.log("PRIMERA FICHA");
console.log(titulo, " - ", autor, " - ", editorial);

//podemos tener todas las claves y valores
const nombresCampos = Object.keys(catalogo[0]);
const valoresCampos = Object.keys(catalogo[0]);

console.log("Nombres claves: ", nombresCampos);
console.log("Valores claves: ", valoresCampos);

//podemos usar los métodos que hemos usado con arrays normales
const disponibles = catalogo.filter((libro_catalogo) => libro_catalogo.disponible)

console.log("Libros disponibles: ", disponibles.length , " de ", catalogo.length);

const titulos = catalogo.map((libro) => libro.titulo)
console.log("Títulos: ", titulos);

const titulosDisponibles = catalogo
.filter((l) => l.disponible)
.map((l) => titulo)

console.log("Se puede adquirir: ", titulosDisponibles.join(" - "));

//buscar
const autorRay = catalogo.find((lib) => lib.autor === "Ray");
console.log("De Ray: ", autorRay.titulo);