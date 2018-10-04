import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
/*
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../pages/home';
import { TabsPage } from '../tabs/tabs';*/
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  constructor(private AfAuth: AngularFireAuth,private toast : ToastController,
    
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User){
    try{
      const result = this.AfAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result){
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

  register(){
   /* this.navCtrl.push('RegisterPage');*/
    this.navCtrl.push('RegisterPage');
  }

}
