import { Component } from '@angular/core';
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
  IonLabel,
  IonCheckbox,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
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
    IonLabel,
    IonCheckbox
  ],
})
export class AppComponent {
  constructor() {}
}
