import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private AfAuth: AngularFireAuth,private toast : ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
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

  async Salir(user : User){
   /* try{
      const result = await this.AfAuth.auth.signOut();
     if(result){*/
      const result = 'hola mundo';
        this.toast.create({
          message: `Salir, ${result}`,
          duration: 3000
        }).present();
        this.navCtrl.push('RegisterPage');
     /* }
      */ /*   }
    catch(e){
      this.toast.create({
        message: `Correo Electronico o valido`,
        duration: 3000
      }).present();
    }*/
  }
}

