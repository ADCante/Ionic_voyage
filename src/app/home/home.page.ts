import { Component } from '@angular/core';
// import { IonNav } from '@ionic/angular';
// import { IonApp } from '@ionic/angular';
// import { IonItem } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
  IonInput,
  IonList,
  IonItem,
  IonRouterOutlet,
  IonApp,
  IonFooter,
  IonNav
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonCardTitle,
    IonInput,
    IonList,
    IonItem,
    IonRouterOutlet,
    IonApp,
    IonFooter,
    IonNav
  ],
})
export class HomePage {
  constructor() {}
}
