const alumnado = [{ nombre: "Ana", nota: 8 }, { nombre: "Luis", nota: 4 }, { nombre: "Marta", nota: 9 }];

//Obtener los nombres de quienes han aprobado y la ficha completa de la primera persona que supere el 8.

const aprobados = alumnado
.filter((alumno) => alumno.nota >= 5)
.map((alumno) => alumno.nombre)
console.log("Alumnos aprobados: " + aprobados.join(", "));

const mayor = alumnado.find((alumno) => alumno.nota === 8);
console.log("Primer alumno con nota 8: " + mayor.nombre, mayor.nota);