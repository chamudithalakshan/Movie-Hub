import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FilmService} from "../services/film.service";
import {Film} from '../model/Film';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css'
})
export class FilmDetailsComponent implements OnInit {
  filmId: string | null = '';
  film: Film | undefined;
  safeVideoUrl: SafeResourceUrl | undefined;
  videoUrlString!: string
  youTubeVideoId!:string | null

  constructor(private route: ActivatedRoute, private filmService: FilmService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.filmId = this.route.snapshot.paramMap.get('id');

    if (this.filmId !== null) {
      // Retrieve film data from the service based on the film ID
      this.film = this.filmService.getFilmById(this.filmId);
      if (this.film === undefined) {
        console.error('Film not found');
      } else {
        // Sanitize the videoUrl
        this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.film.videoUrl);

      }
    } else {
      console.error('Film ID is null');
    }
  }

}
