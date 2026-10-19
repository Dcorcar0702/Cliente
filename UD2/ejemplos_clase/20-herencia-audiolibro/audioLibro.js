import {Libro} from './libro.js';

export class Audiolibro extends Libro {
    constructor(titulo, autor, anno, minutos){
        //Para llamar al constructor del "padre" uso super
        super(titulo, autor, anno);
        this.minutos = minutos;
    }

    resumen(){
        return `${super.resumen()} - ${this.minutos}`;
    }
}