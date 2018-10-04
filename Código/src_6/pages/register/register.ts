import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth} from "angularfire2/auth";
import { HomePage } from '../home/home';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  constructor(private afAuth: AngularFireAuth,private toast : ToastController,
    
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user : User){
    try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password) ;
    if(result){
    /**this.navCtrl.push('TabsPage');*/
    this.login(user);
    /**console.log(result);*/
    }
    }
    catch(e){
      this.toast.create({
        message: `Correo Electronico o valido`,
        duration: 3000
      }).present();
    }
  }

  async login(user: User){
    try{
      const result1 = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result1){
        this.navCtrl.setRoot(HomePage);
      }      
    }
    catch(e){
      this.toast.create({
        message: `Correo Electronico o Contraseña Incorrectos`,
        duration: 3000
      }).present();
    }
  }
}
