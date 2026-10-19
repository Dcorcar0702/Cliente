// Aquí se escribe el programa.
import { Grupo} from './grupo.js';
import { inscripciones } from './grupos.js';
import { Festival } from './festival.js';


const festival1 = new Festival("Sonidos del Sur");

const grupos = inscripciones.map(ins => new Grupo(ins.nombre, ins.genero, ins.minutos))

for (const grupo of grupos) {
    festival1.anadirGrupo(grupo);
}

//console.log("Resumen de Festival: ", festival1.resumen());

//Creamos e intentamos dar de alta un grupo

console.group("MODIFICACIONES DEL FESTIVAL");
const nebula = new Grupo("Nébula", "electrónica", 90);

const almacenado = festival1.anadirGrupo(nebula);
console.log("Se ha añadido el grupo nebula", almacenado);

//Resumen del festival
console.log("Resumen de Festival: ", festival1.resumen());

//Inscripcion nueva

const minutosDelFormulario = "40";
//Transformar la cadena a numero para sumar.
const minutos = Number(minutosDelFormulario);
console.log("Minutos ya convertidos ", minutos + 5);

const tardeoClub = new Grupo("Tardeo Club", "Pop", minutos);

festival1.anadirGrupo(tardeoClub);
console.log("Se ha añadido el grupo Tardeo Club", tardeoClub.ficha());

//Comprobar si tardeoClub es larga

console.log("¿Tiene duración larga?", tardeoClub.esLargo() ? "sí" : "no");
console.log("Cuantos grupos tiene el festival", festival1.cuantos());

console.groupEnd();

console.group("INFORME");

const cartel = festival1.cartel();
//console.table(cartel.map(g => ({nombre: g.nombre(), minutos: g.minutos()})));
console.table(cartel.map(g => g.ficha()));

//Comprobar las que pasan de 60 mins
const largos = cartel.filter(g => g.esLargo());
console.log("Cuantos son largos: ", largos.length);
console.log("Nombre: ", cartel.map(g => g.nombre()));

const primeroLargo = cartel.find(g => g.esLargo());
console.log("Cual es el primero más largo: ", primeroLargo.ficha());

//Duracion total del festival
const totalMinutos = cartel.reduce((acumulado, g) => acumulado + g.minutos(), 0);
console.log("Duración total del festival: ", totalMinutos + " minutos"); 

//Dos actuaciones más largas
const cartelAOrdenar = [...cartel];
cartelAOrdenar.sort((a,b) => b.minutos() - a.minutos());
console.log("Ordenados por duración: ", cartelAOrdenar.map(g => g.ficha()));

//Desestructurar por posición.
const [primero, segundo, tercero] = cartelAOrdenar;
console.log("Los dos más largos: ", primero.ficha(), "y", segundo.ficha());


console.log("Todos pasan de media hora?", cartel.every(g => g.minutos() > 30));

console.groupEnd();

//Guardar cartel

console.group("GUARDAR CARTEL");

const paraGuardar = cartel.map(g => ({nombre : g.nombre(), minutos: g.minutos(),}))
const texto = JSON.stringify(paraGuardar);
console.log("Convertido a texto", texto);
const recuperado = JSON.parse(texto);
console.log("Recuperado: ", recuperado);

