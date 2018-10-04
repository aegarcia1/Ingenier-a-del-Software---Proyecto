import { Injectable } from '@angular/core';
/*import { EventosService } from './eventos.service';*/

@Injectable()
export class InscritoEveService {

    constructor(){}

    inscritos = [
        {id:1, id_evento:1, id_Usuario:'', asistencia:'1'}        
    ];

    public getinscripcion(){
        return this.inscritos;
    }

    public Getinscripcion(id_Usuario){
        return this.inscritos.filter(
            function(e,i){
                return e.id_Usuario == id_Usuario
            })[0] || {id:null, id_evento:null, id_Usuario:null, asistencia:null}
    }

    public createinscripcion(inscritos){
        this.inscritos.push(inscritos);  
        return true;      
    }

    public deleteinscripcion(inscritos){
        for (let i = 0; i < this.inscritos.length; i++){
            if(this.inscritos[i].id == inscritos.id){
                this.inscritos.splice(i , 1);
                return true;
            }
        }
    }
}

