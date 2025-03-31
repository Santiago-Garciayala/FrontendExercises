import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonRadio, IonRadioGroup, IonButtons, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButton, IonRadio, IonRadioGroup, IonButtons, IonList, IonItem, IonLabel,]
})
export class StatusPage implements OnInit {
  emotions: string[] = ["Happy", "Sad", "Energetic", "Lazy"];
  status: string = "";

  constructor(private storage: Storage, private router: Router) { }

  async ngOnInit() {
    //need to create storage before using it
    await this.storage.create();
  }
  //does something similar to onInit
  async ionViewWillEnter() {
    this.status = await this.storage.get('status');
  }

  //async because storage operations are async
  async onBtnClick() {
    //console.log(this.status);
    //handle promise using await, waits until that line of code is done executing
    await this.storage.set('status', this.status);
    this.router.navigateByUrl('/home');
  }

}
