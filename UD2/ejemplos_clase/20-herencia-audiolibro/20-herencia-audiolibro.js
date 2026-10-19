import {Libro} from './libro.js';
import {Audiolibro} from "./audioLibro.js";

const libroSombra = new Libro("La sombra del viento", "Ruiz", 2000);
const AudioLibroMedico = new Audiolibro("El Medico", "autor", 2012, 120);

console.log("FICHA DE TODOS LOS LIBROS Y AUDIOLIBROS");
console.log(libroSombra.resumen());
console.log(AudioLibroMedico.resumen());