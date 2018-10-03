import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class NoteService {

    constructor(public afDB: AngularFireDatabase ){

    }
    notes = [
        {id:1, title:'nota 1', description:'descripcion nota 1'},
        {id:2, title:'nota 2', description:'descripcion nota 2'},
        {id:3, title:'nota 3', description:'descripcion nota 3'},
        {id:4, title:'nota 4', description:'descripcion nota 4'},
        {id:5, title:'nota 5', description:'descripcion nota 5'} 
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
        return this.afDB.database.ref('notas/' + note.id).set(note); 
        /*this.notes.push(note);*/
        
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

