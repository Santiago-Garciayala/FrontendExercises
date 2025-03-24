import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieServiceService } from '../services/movie-service.service';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class HomePage implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data.Search;
      //console.log(this.movies);
    });
  }
}
