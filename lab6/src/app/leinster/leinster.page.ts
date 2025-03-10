import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
//need all the following imports, Router must be passed throught constructor not imports[]
import { IonBackButton } from '@ionic/angular/standalone';
import { IonButtons } from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonButton, RouterLink]
})
export class LeinsterPage implements OnInit {
  counties: string[] = ["Carlow", "Dublin", "Kildare", "Kilkenny", "Laois", "Longford", "Louth", "Meath", "Offaly", "Westmeath", "Wexford", "Wicklow"];

  //takes in instance of Router for using in the class
  constructor(private router: Router) { }

  //for routing with Router
  onBtnPressed() {
    this.router.navigate(['/counties']);
  }
  ngOnInit() {
  }

}
