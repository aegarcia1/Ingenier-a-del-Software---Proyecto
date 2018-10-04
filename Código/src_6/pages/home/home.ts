import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { TabsPage } from '../tabs/tabs';
import { EventosPage } from '../eventos/eventos';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = EventosPage;
  tab2Root = AboutPage;
  tab3Root = TabsPage;

  constructor() {

  }
}