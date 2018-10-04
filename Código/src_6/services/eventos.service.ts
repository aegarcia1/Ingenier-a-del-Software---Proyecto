import { Injectable } from '@angular/core';

@Injectable()
export class EventosService {

    constructor(){}

    eventos = [
        {id:1, nombre:'Primer Evento', fecha:'November 5, 1955', lugar:'Bogota', descripcion:'todas las mascotas estan invitadas', tipo:'Perros', estado:'1'},
        {id:2, nombre:'Segundo Evento', fecha:'November 5, 1955', lugar:'Bogota', descripcion:'todas las mascotas estan invitadas', tipo:'Gatos', estado:'1'},
        {id:3, nombre:'Tercer Evento', fecha:'November 5, 1955', lugar:'Bogota', descripcion:'todas las mascotas estan invitadas', tipo:'Loros', estado:'1'},
        {id:4, nombre:'Cuarto Evento', fecha:'November 5, 1955', lugar:'Bogota', descripcion:'todas las mascotas estan invitadas', tipo:'Ratones', estado:'1'},
        {id:5, nombre:'Quinto Evento', fecha:'November 5, 1955', lugar:'Bogota', descripcion:'todas las mascotas estan invitadas', tipo:'Tortugas', estado:'0'}  
    ];

    public getNotes(){
        /*return this.afDB.list('notas/');*/
        return this.eventos;
    }

    public GetNote(id){
        return this.eventos.filter(
            function(e,i){
                return e.id == id
            })[0] || {id:null, nombre:null, fecha:null, lugar:null, descripcion:null, tipo:null, estado:null}
    }

    public createNote(eventos){
        this.eventos.push(eventos);        
    }

    public editNote(eventos){
        for (let i = 0; i < this.eventos.length; i++){
            if(this.eventos[i].id == eventos.id){
                this.eventos[i] = eventos;
                return true;
            }
        }
    }

    public deleteNote(eventos){
        for (let i = 0; i < this.eventos.length; i++){
            if(this.eventos[i].id == eventos.id){
                this.eventos.splice(i , 1);
                return true;
            }
        }
    }
}

