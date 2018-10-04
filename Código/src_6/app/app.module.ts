import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*Conexion con fire base*/
/*import { AngularFireModule } from 'angularfire2';*/
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';


/*export clase conexion */
import { FIREBASE_CONFIG } from './app.firebase.config';

/*paginas*/
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { EventosPage } from '../pages/eventos/eventos';
import { DetalleEventoPage } from '../pages/detalle-evento/detalle-evento';
import { HomePage } from '../pages/home/home';
import { InsEventoPage } from '../pages/ins-evento/ins-evento';

/*servicion o clases*/
import { NoteService } from '../services/notes.service';
import { EventosService } from '../services/eventos.service';
import { InscritoEveService } from '../services/inscritoEve.service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    AboutPage,
    ContactPage,
    EventosPage,
    DetalleEventoPage,
    HomePage,
    InsEventoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    AboutPage,
    ContactPage,
    EventosPage,
    DetalleEventoPage,
    HomePage,
    InsEventoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService,EventosService,InscritoEveService
  ],
})
export class AppModule {}
