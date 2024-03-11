import { Component, ElementRef, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { CardsComponent } from '../component/cards/cards.component';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import { initFlowbite } from "flowbite";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    RouterOutlet, CardsComponent, NgForOf, RouterLink
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  image: string = 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp';
  filmId: string = "123";
  name:string="fast and furios"

  

  constructor(
    private router: Router,
    private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private elementRef: ElementRef,
    private route: ActivatedRoute
  ) {}


     fetchedData = [
      { id: 'c001',name:"fast x", imageUrl: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp' },
      { id: '2',name:"fast ix", imageUrl: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp' },
      { id: '3',name:"fast iix", imageUrl: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp' },
      { id: '4',name:"fast iix", imageUrl: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp' },
      { id: '5',name:"fast iix", imageUrl: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp' },

    ];
    // const divElement = this.elementRef.nativeElement.querySelector('#cardSection');

    // fetchedData.forEach(data => {
    //   const factory = this.resolver.resolveComponentFactory(CardsComponent);
    //   const componentRef = this.viewContainerRef.createComponent(factory, undefined, undefined, undefined);
    //   const instance = componentRef.instance as CardsComponent;

    //   instance.imageUrl = data.imageUrl;
    //   instance.filmId = data.id;
    //   instance.name = data.name;
    // });

  navigateToFilmDetails() {
    console.log('Navigating to film details with filmId:', this.filmId);
    this.router.navigate(['/film-details', this.filmId]);
  }
  }

