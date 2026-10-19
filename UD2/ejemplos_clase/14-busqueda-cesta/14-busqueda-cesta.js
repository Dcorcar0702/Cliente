const precios = [12.5, 30, 8, 45.9, 19.99];

console.log("CESTA");
console.log("Precios: ", precios.join(","));

/** Buscar el valor */

console.log("Primero mayor que 20: ", precios.find(precio => precio > 20));

/** Buscar la posicion del valor */

console.log("Posicion mayor que 20: ", precios.findIndex(precio => precio > 20));

/** some y every */

console.log("Hay algun producto gratis? ", precios.some(precio => precio === 0));
console.log("Todos los productos estan por debajo de 50? ", precios.every(precio => precio < 50));

/** Ordenamos el array */

precios.sort((a, b) => a - b);
console.log("Precios ordenados: ", precios.join(", "));