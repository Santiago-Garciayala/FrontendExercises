import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonBackButton } from '@ionic/angular/standalone';
import { IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-counties',
  templateUrl: './counties.page.html',
  styleUrls: ['./counties.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton]
})
export class CountiesPage implements OnInit {
  counties: string[] = ["Carlow", "Dublin", "Kildare", "Kilkenny", "Laois", "Longford", "Louth", "Meath", "Offaly", "Westmeath", "Wexford", "Wicklow"];

  constructor() { }

  ngOnInit() {
  }

}
