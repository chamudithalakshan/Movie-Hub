import {Component, EventEmitter} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { RouterModule } from '@angular/router';
import {AdminAddfilmComponent} from "../admin-addfilm/admin-addfilm.component";
import {NgIf} from "@angular/common";
import {AdminManageFilmComponent} from "../admin-manage-film/admin-manage-film.component";


@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AdminAddfilmComponent,
    NgIf,
    AdminManageFilmComponent
  ],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})

export class AdminHomeComponent {





}
