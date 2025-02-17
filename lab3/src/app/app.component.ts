import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component'; //imports component a
import { BComponent } from './b/b.component'; //imports component b

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AComponent, BComponent], //adds to imports array
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab3';
}
