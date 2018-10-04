import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class NoteService {

    constructor(public afDB: AngularFireDatabase ){

    }
    notes = [
        {id:1, title:'Foro 1', description:'descripcion Foro 1'},
        {id:2, title:'Foro 2', description:'descripcion Foro 2'},
        {id:3, title:'Foro 3', description:'descripcion Foro 3'},
        {id:4, title:'Foro 4', description:'descripcion Foro 4'},
        {id:5, title:'Foro 5', description:'descripcion Foro 5'} 
    ];

    public getNotes(){
        /*return this.afDB.list('notas/');*/
        return this.notes;
    }

    public GetNote(id){
        return this.notes.filter(
            function(e,i){
                return e.id == id
            })[0] || {id:null, title:null, description:null}
    }

    public createNote(note){
        /*return this.afDB.database.ref('notas/' + note.id).set(note);*/ 
        this.notes.push(note);
        
    }

    public editNote(note){
        for (let i = 0; i < this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes[i] = note;
                return true;
            }
        }
    }

    public deleteNote(note){
        for (let i = 0; i < this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes.splice(i , 1);
                return true;
            }
        }
    }
}

