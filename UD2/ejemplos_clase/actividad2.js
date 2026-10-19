/**
 * Obtener un array nuevo con los precios subidos en un 10% y otro array con los precios que superen los 20 euros que superan los 20 € una vez aplicado el iva redondeando a dos decimales.
 */

const precios = [12.5, 30, 8, 45.9, 19.99];

const preciosSubidos = precios.map((precio) => parseFloat((precio * 1.1).toFixed(2)));

const preciosSuperiores = preciosSubidos.filter((precio) => precio > 20);

console.log("PRECIOS ORIGINALES: ", precios.join(", "));
console.log("PRECIOS SUBIDOS EN UN 10%: ", preciosSubidos.join(", "));
console.log("PRECIOS SUPERIORES A 20 €: ", preciosSuperiores.join(", "));

