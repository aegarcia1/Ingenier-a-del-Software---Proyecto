import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { InsEventoPage } from '../ins-evento/ins-evento';
import { EventosService } from '../../services/eventos.service';
import { InscritoEveService } from '../../services/inscritoEve.service';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  pet: string = "Eventos";
  eventos = [];
  evetosInscritos = [];

  constructor(private AfAuth: AngularFireAuth,private toast : ToastController,
    public navCtrl: NavController, public navParams: NavParams, public EventosService : EventosService,
    public InscritoEveService: InscritoEveService) {
      this.eventos = EventosService.getNotes();
      this.evetosInscritos = InscritoEveService.getinscripcion();
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

  public goTodetail(id,mostrar){     
    this.navCtrl.push(InsEventoPage, {id:id,mostrar:mostrar});
  }

}
