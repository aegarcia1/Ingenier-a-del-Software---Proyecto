import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { NoteService } from '../../services/notes.service';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  note = {id: null, title: null, description: null};
  id = null; 

  constructor(private AfAuth: AngularFireAuth,private toast : ToastController,
    public NoteService : NoteService,public navCtrl: NavController, public navParams: NavParams) {
      this.id = navParams.get('id');
      if(this.id != 0 ){
        this.note = NoteService.GetNote(this.id);
      }
  }

  ionViewDidLoad() {
    /**this.AfAuth.authState.subscribe(data => console.log(data))*/
    this.AfAuth.authState.subscribe(data => {
      if (data.email && data.uid){
        this.toast.create({
          message: `Bienvenido a Petbook, ${data.email}`,
          duration: 3000
        }).present();
      }
      else{
        this.toast.create({
          message: `no se encuentra autenticado`,
          duration: 3000
        }).present();
      }
    })
  }

  addNote(){
    if(this.id != 0 ){
      const result = this.NoteService.editNote(this.note);
      if(result){
        this.toast.create({
          message: `Nota Modificada`,
          duration: 3000
        }).present();       
      }
    }
    else{
      this.note.id = Date.now()
      const result = this.NoteService.createNote(this.note);
      if(result){
        this.toast.create({
          message: `Nota Guardada`,
          duration: 3000
        }).present();      
      }
    }
    this.navCtrl.pop();           
  }

  deleteNote(){
    const result = this.NoteService.deleteNote(this.note);
    if(result){
      this.toast.create({
        message: `Nota Eliminada`,
        duration: 3000
      }).present();      
    }
    this.navCtrl.pop();  
  }
}
