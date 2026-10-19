export class Festival {
    #nombre;
    #cartel = [];

    constructor(nombre) {
        this.#nombre = nombre;
    }

    anadirGrupo(grupoAnadir){
        const repetido = this.#cartel.some( g => g.nombre() === grupoAnadir.nombre())
        if (repetido){
            return false;
        }
        this.#cartel.push(grupoAnadir);
        return true;
    }
/** 
    anadirGrupo(grupoAnadir){
        const repetido = this.#cartel.includes( g => g.nombre() === grupoAnadir.nombre())
        if (repetido){
            return false;
        }
        this.#cartel.push(grupoAnadir);
        return true;
    }
*/
    cuantos(){
        return this.#cartel.length;
    }

    cartel(){
        return [...this.#cartel];
    }

    resumen() {
        return `${this.#nombre} - ${this.cuantos()} grupos en el cartel.`;
    }
}