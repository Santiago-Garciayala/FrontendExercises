import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  weather: string = "";
  subweather: string = "";

  constructor(private service: StudentServiceService) { }

  ngOnInit(): void {
    //this method calls the openweathermap API asynchronously then we get weather data from json response
    this.service.getWeatherData().subscribe((data) => {
      //console.log(data);
      this.weather = data.weather[0].main;
      this.subweather = data.weather[0].description;
    });
  }
}
