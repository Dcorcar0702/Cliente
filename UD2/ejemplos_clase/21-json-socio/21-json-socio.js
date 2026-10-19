const socio = {
    nombre: "Maria",
    carnet: "B-123",
    activo: true,
};

console.log("EL OBJETO");
console.log(socio);


//Vamos a convertir el objeto en cadena
const texto = JSON.stringify(socio);
console.log("\nCONVERTIDOS A TEXTO");
console.log(texto);
console.log(texto.length);

//Vamos a convertir la cadena a un objeto nuevo

const vuelta = JSON.parse(texto);
console.log("\nCONVERTIDOS A OBJETO");
console.log(vuelta.nombre, " - ", vuelta.carnet);

console.log("Es el mismo objeto?", vuelta === socio);

//En el cambio perdemos cosas
const socioCompleto = {
    nombre: "Maria",
    carnet: "B-123",
    activo: true,
    saludo(){
        return "Hola";
    }
};

const textoCompleto = JSON.stringify(socioCompleto);
console.log(textoCompleto);
console.log(JSON.parse(textoCompleto));