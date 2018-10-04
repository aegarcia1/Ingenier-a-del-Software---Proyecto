import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { NoteService } from '../../services/notes.service';
import { ContactPage } from '../contact/contact';

/*import { AngularFirestore } from '@angular/fire/firestore';*/
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
  export class TabsPage {
    notes = [];
    @ViewChild('myNav') nav: NavController;

   constructor(
    private afAuth: AngularFireAuth,private toast : ToastController, 
    public NoteService : NoteService,public navCtrl: NavController, public navParams: NavParams) {
      this.notes = NoteService.getNotes();
    
     /* this.items = db.collection('notas').valueChanges(); /*.collection('notas').valueChanges();*/
    }

  ionViewDidLoad() {
    /**this.AfAuth.authState.subscribe(data => console.log(data))*/
    this.afAuth.authState.subscribe(data => {
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

  public goTodetail(id){
    this.navCtrl.push(ContactPage, {id:id});
  }

  public createNote(){
    this.navCtrl.push(ContactPage, {id:0});
  }
}
