import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { DetalleEventoPage } from '../detalle-evento/detalle-evento';
import { EventosService } from '../../services/eventos.service';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({ 
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  eventos = [];
  numEve = null;   

  @ViewChild('myNav') nav: NavController; 

  constructor(private afAuth: AngularFireAuth,private toast : ToastController, 
    public navCtrl: NavController, public navParams: NavParams,public EventosService : EventosService) {
    this.eventos = EventosService.getNotes();
    this.numEve = this.eventos.length;
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
    this.navCtrl.push(DetalleEventoPage, {id:id});
  }

  public createEvento(){
    this.navCtrl.push(DetalleEventoPage, {id:0});
  }

}
