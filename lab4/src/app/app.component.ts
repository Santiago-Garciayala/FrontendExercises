import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresidentsComponent } from './presidents/presidents.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PresidentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab4';
  pressCount: number = 0;
  starShown: boolean = true;

  onButtonClicked(): void {
    ++this.pressCount;
  }

  onStarDoubleClicked() {
    this.starShown = !this.starShown;
    console.log("Its working");
  }
}
