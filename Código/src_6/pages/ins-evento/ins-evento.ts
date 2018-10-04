import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { EventosService } from '../../services/eventos.service';
import { InscritoEveService } from '../../services/inscritoEve.service';

/**
 * Generated class for the InsEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ins-evento',
  templateUrl: 'ins-evento.html',
})
export class InsEventoPage {
  
  evento = {id:null, nombre:null, fecha:null, lugar:null, descripcion:null, tipo:null, estado:null};
  ideve = null; 
  mostrat = null;

  inscritos = {id:1, id_evento:1, id_Usuario:'', asistencia:'1'};
  
  @ViewChild('myNav') nav: NavController; 

  constructor(private AfAuth: AngularFireAuth,private toast : ToastController,public InscritoEveService : InscritoEveService,
    public EventosService : EventosService,public navCtrl: NavController, public navParams: NavParams) {
      this.ideve = navParams.get('id');
      this.mostrat = navParams.get('mostrar');     

      if(this.ideve != 0 ){
        this.evento = EventosService.GetNote(this.ideve);
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

  inscribirse(){
    this.inscritos.id = Date.now();
    this.AfAuth.authState.subscribe(data => 
      {this.inscritos.id_Usuario = data.uid});
    this.inscritos.id_evento = this.ideve;
    this.inscritos.asistencia = "1";
    const result = this.InscritoEveService.createinscripcion(this.inscritos);
    if(result){
        this.toast.create({
          message: `inscripcion Guardada`,
          duration: 3000
        }).present();
      }
    }

}