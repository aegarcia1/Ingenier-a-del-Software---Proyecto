import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { EventosService } from '../../services/eventos.service';
/**
 * Generated class for the DetalleEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-detalle-evento',
  templateUrl: 'detalle-evento.html',
})
export class DetalleEventoPage {

  evento = {id:null, nombre:null, fecha:null, lugar:null, descripcion:null, tipo:null, estado:null};
  id = null; 
  
  constructor(private AfAuth: AngularFireAuth,private toast : ToastController,
    public EventosService : EventosService,public navCtrl: NavController, public navParams: NavParams) {
      this.id = navParams.get('id');
      if(this.id != 0 ){
        this.evento = EventosService.GetNote(this.id);
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

  addEvento(){
    if(this.id != 0 ){
      const result = this.EventosService.editNote(this.evento);
      if(result){
        this.toast.create({
          message: `Evento Modificado`,
          duration: 3000
        }).present();       
      }
    }
    else{
      this.evento.id = Date.now()
      this.evento.estado = 1;
      const result = this.EventosService.createNote(this.evento);
      if(result){
        this.toast.create({
          message: `Evento Guardado`,
          duration: 3000
        }).present();      
      }
    }
    this.navCtrl.pop();           
  }

  deleteEvento(){
    const result = this.EventosService.deleteNote(this.evento);
    if(result){
      this.toast.create({
        message: `Evento Eliminado`,
        duration: 3000
      }).present();      
    }
    this.navCtrl.pop();  
  }

}
