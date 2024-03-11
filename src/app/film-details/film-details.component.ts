import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css'
})
export class FilmDetailsComponent implements OnInit{
  videoSrc = 'https://www.example.com/movie.mp4';

  filmId: string = '';
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // Retrieve the film ID from route parameters
    this.route.params.subscribe(params => {
      this.filmId = params['cid']; // No need to convert

      console.log(this.filmId)
    });
  }


}
