import { Component, Input, OnInit, input } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styleUrl: './cards.component.css'

})
export class CardsComponent  {
  @Input() id = "";
  @Input() imageUrl: string = '';

  // filmId: string = this.id;
  @Input() name:string=""

  constructor(private router: Router) {}

  navigateToFilmDetails(cid : string) {
    this.router.navigate(['/film-details', cid]);
    console.log('Navigating to film details with filmId:', cid);
  }


}
