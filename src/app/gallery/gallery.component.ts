import { Component, OnInit } from '@angular/core';
import {
  IonMenu,
  IonHeader,
  IonTabBar,
  IonContent,
  IonButtons,
  IonTitle,
  IonList,
  IonItem,
  IonCard,
  IonLabel,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [
    IonMenu,
    IonHeader,
    IonTabBar,
    IonContent,
    IonButtons,
    IonTitle,
    IonList,
    IonItem,
    IonCard,
    IonLabel,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
  ],
})
export class GalleryComponent  {
  constructor() {}
}
