import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FilmService} from "../../services/film.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf,
    NgIf
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  fetchedData!: any[];
  filteredFilmNames: string[] = [];
  @ViewChild('searchContainer') searchContainer!: ElementRef;
  constructor(private filmService: FilmService) {
  }
  ngOnInit() {
    this.fetchedData=this.filmService.getFilmData();
  }

  onDropdownClick(event: MouseEvent) {
    event.stopPropagation(); // Prevent the click event from propagating to the document body
  }

  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event: any) {
    const searchValue = event.target.value.toLowerCase(); // Convert the search value to lowercase for case-insensitive comparison

    // Assuming fetchedData is an array of objects containing film information
    const filteredFilms = this.fetchedData.filter(film => film.name.toLowerCase().includes(searchValue));

    // Extract the names of the filtered films and assign them to filteredFilmNames
    this.filteredFilmNames = filteredFilms.map(film => film.name);
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    // Close the dropdown if the click event occurs outside of the search container
    if (!this.searchContainer.nativeElement.contains(event.target)) {
      this.filteredFilmNames = []; // Clear the filtered film names array
    }
  }


}
