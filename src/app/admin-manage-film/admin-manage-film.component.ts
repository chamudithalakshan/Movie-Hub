import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilmService} from "../services/film.service";
import {Film} from "../model/Film";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-admin-manage-film',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './admin-manage-film.component.html',
  styleUrl: './admin-manage-film.component.css'
})
export class AdminManageFilmComponent implements OnInit{
  film:Array<any>=[]
  @Output() toggle: EventEmitter<string> = new EventEmitter<string>();


  constructor(private filmService: FilmService) {
  }
  ngOnInit() {
this.film=this.filmService.fetchedData
  }
  toggleComponent(component: string) {
    this.toggle.emit(component);
  }
}
