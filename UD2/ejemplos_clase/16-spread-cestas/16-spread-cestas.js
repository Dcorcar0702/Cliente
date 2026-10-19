const cestaMaria = [12.5, 90, 76];
const cestaAntonio = [8, 12, 32];

//Copia con spread del array

const copiaCestaMaria = [...cestaMaria];

copiaCestaMaria.sort((a, b) => a - b);

console.log("Cesta Maria: ", cestaMaria.join(", "));
console.log("Copia Cesta Maria: ", copiaCestaMaria.join(", "));

//Un array que contenga varuos arrays

const todasCestas = [...cestaMaria, ...cestaAntonio];
console.log("Todas las cestas: ", todasCestas.join(", "));

