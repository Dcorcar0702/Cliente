const temperaturas = [18, 21, 25, 19, 30, 28, 22];

/** Pasó de 30 grados? */

console.log("¿Alguna temperatura pasó de 30 grados? ", temperaturas.some(temp => temp > 30));

/** Si todos los dias estuvieron por encima de 15, cual fue el primer dia en superar los 25, y en que posicion de la semana esta */
if (temperaturas.every(temp => temp > 15)) {
    const primerDiaSuperior = temperaturas.findIndex(temp => temp > 25);
    console.log("El primer día en superar los 25 grados fue el día", primerDiaSuperior + 1);
} else {
    console.log("No todos los días estuvieron por encima de 15 grados");
};

/** Lista ordenada de mayor a menor */
const temperaturasOrdenadas = [...temperaturas].sort((a, b) => b - a);
console.log("Temperaturas ordenadas de mayor a menor:", temperaturasOrdenadas.join(", "));