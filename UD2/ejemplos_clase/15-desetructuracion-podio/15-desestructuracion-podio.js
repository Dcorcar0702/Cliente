/** 
const clasificacion = ["Maria", "Antonio", "Carmen"];

const primero = clasificacion[0];

console.log("El primero es: ", primero);

//Destructuración de arrays

const [ oro, plata, bronce ] = clasificacion;

console.log("1.", oro);
console.log("2.", plata);
console.log("3.", bronce);

//Saltarnos una posicion

const [ganador, , tercero] = clasificacion;

console.log("Ganador: ", ganador);
console.log("Tercero: ", tercero);

//Quedarnos con el resto de elementos

const [primer, ...resto] = clasificacion;

console.log("Primer: ", primer);
console.log("Resto: ", resto.join(", "));

//Intercambiar variables

let local = 2;
let visitante = 3;

[local, visitante] = [visitante, local];
console.log("Local: ", local);
console.log("Visitante: ", visitante);

*/

//Actividad 4

const notas = [4, 9, 6, 10, 7];

notas.sort((a, b) => b - a);

const [maxima, segunda, ...resto] = notas;

console.log("La nota máxima es: ", maxima);
console.log("La segunda nota es: ", segunda);
console.log("El resto de notas son: ", resto.join(", "));