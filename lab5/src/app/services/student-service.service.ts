import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private httpClient: HttpClient) { }

  //actual API calls happen here
  getStudentData(): Observable<any> {
    return this.httpClient.get("https://jsonblob.com/api/jsonblob/1336347674273832960");
  }

  getWeatherData(): Observable<any> {
    return this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303");
  }
}
