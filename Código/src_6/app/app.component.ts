/*import { Component, ViewChild } from '@angular/core';*/
import { Component } from '@angular/core';
/*import { Platform, Nav} from 'ionic-angular';*/
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/*pagina de inicio de la aplicacion*/
/*import { LoginPage } from '../pages/login/login';*/
import { AboutPage } from '../pages/about/about';

/*import { HomePage } from '../pages/home/home';*/

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
 /* @ViewChild(Nav) nav: Nav;*/

  rootPage:any = AboutPage;

  /*pages: Array<{title: string, component: any}>;*/
  

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
      
    /*
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About', component: AboutPage },
      { title: 'Contac', component: ContactPage }
    ];*/
  }
  // used for an example of ngFor and navigation
    


  /*openPage(page) { 
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }	*/
}
