import { Component, ViewChild } from '@angular/core';
/*import { Nav, Platform } from 'ionic-angular';*/
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
/*import { TabsPage } from '../pages/tabs/tabs';*/
/*
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';*/
/*import { TabsPage } from '../pages/tabs/tabs';*/

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;

  /*pages: Array<{title: string, component: any}>;*/

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
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
