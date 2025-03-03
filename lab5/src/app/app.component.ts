import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentsComponent, WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab5';
}
