const kilometros = [12, 5, 18, 7, 3];

/**El dato de una sexta participante llega de un formulario, así que llega como cadena: const
kmDeNuria = "9";. Conseguir que al sumarle 1 dé diez.
*/

const kmDeNuria = "9";

const kmDeNuriaNum = Number(kmDeNuria);

kilometros.push(kmDeNuriaNum + 1);

console.log(kilometros.join(", "));

/**Obtener un array nuevo con cada distancia aumentada en 2, y comprobar qué ha pasado con kilometros */

const sumarDosKm = kilometros.map((dato) => dato + 2);

console.log(sumarDosKm);

/** Obtener un array con las distancias que superan los 6 km. */

const Mayor6 = kilometros.filter((dato) => dato > 6);

console.log(Mayor6);

/** Obtener un array con las distancias que superan los 6 km, aumentadas en 2, encadenando los
dos métodos. Y averiguar si da lo mismo cambiando el orden de los eslabones. */

const mayores = kilometros.filter((dato) => dato > 6);

const sumamayores = mayores.map((dato) => dato + 2);

console.log(sumamayores);

/** Obtener el total de kilómetros del grupo, primero con un bucle y después con reduce. */

const totalKm = kilometros.reduce((contador, kilometro) => contador + kilometro, 0);

let totalbucle = 0;

for (const km of kilometros) {
    totalbucle += km;
}

console.log(totalbucle);
console.log(totalKm);

/** Obtener el total de las distancias que superan los 6 km */
const totalMayores = kilometros
    .filter((dato) => dato > 6)
    .reduce((contador, kilometro) => contador + kilometro, 0);

console.log(totalMayores);