import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  AlertController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, FormsModule],
})
export class HomePage {
  message: string = '';
  private alertController = inject(AlertController);

  constructor() {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Your Message',
      message: this.message || 'No message entered',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
