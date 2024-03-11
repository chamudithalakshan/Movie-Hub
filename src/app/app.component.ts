import {Component, OnInit,ComponentFactoryResolver,ViewContainerRef} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FooterComponent} from "./component/footer/footer.component";
import {CardsComponent} from "./component/cards/cards.component";
import {HomeComponent} from "./home/home.component";
import {NavBarComponent} from "./component/nav-bar/nav-bar.component";
import {CommonModule} from "@angular/common";
import {initFlowbite} from "flowbite";
import {FilmDetailsComponent} from "./film-details/film-details.component";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    HomeComponent,
    RouterLink,
    RouterLinkActive,
    CardsComponent,
    FooterComponent,
    FilmDetailsComponent,
    ReactiveFormsModule,

  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'Movie-hub';
  isAdminPage!: boolean;

  constructor(
    private router: Router,
    private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {
    this.isAdminPage = this.router.url.includes('/admin');
    // Update isAdminPage whenever the route changes
    this.router.events.subscribe(() => {
      this.isAdminPage = this.router.url.includes('/admin');
    });
  }


}
