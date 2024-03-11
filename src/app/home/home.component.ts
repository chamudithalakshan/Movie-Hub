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

  filmId: string = "";
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
      { id: '2',name:"Wish", imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_disney_wish_799_v3_f9abb2f3.jpeg' },
      { id: '3',name:"Fighter", imageUrl: 'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/52/24/64/midr1_us_2023_sa_poster_1400x2100_nb_1.jpg' },
      { id: '4',name:"Shaitaan", imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-namrszxlsp-portrait.jpg' },
      { id: '6',name:"The God father", imageUrl: 'https://e0.pxfuel.com/wallpapers/1010/999/desktop-wallpaper-the-godfather-50th-anniversary-movie-poster-the-godfather-movie-poster-thumbnail.jpg' },
      { id: '7',name:"Elemental", imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_disney_elemental_v4_793_7f6b85ae.jpeg' },
      { id: '8',name:"Training Day", imageUrl: 'https://wallpapers.com/images/hd/training-day-movie-poster-5j6wi09fenbfkya0.jpg' },
      { id: '9',name:"Kungfu Panda Four", imageUrl: 'https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1702493212/amc-cdn/production/2/movies/70400/70406/PosterDynamic/161281.jpg' },
      { id: '10',name:"One Life", imageUrl: 'https://mediafiles.cineplex.com/Central/Film/Posters/36010_768_1024.jpg' },
      { id: '1',name:"Spy", imageUrl: 'https://static.toiimg.com/photo/msid-90908743/90908743.jpg?134124' },
      { id: '12',name:"Thor love and Thunder", imageUrl: 'https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg' },
      { id: '13',name:"CABRINI", imageUrl: 'https://images.angelstudios.com/image/upload/w_638,h_930,f_webp,c_scale/v1702574747/studio-app/catalog/7b52a924-1803-4b3b-b550-2c1b79d58117' },
      { id: '14',name:"Morbius", imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022-thumbnail.jpg' },
      { id: '15',name:"QuantuMania", imageUrl: 'https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_crd_03.jpg' },

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

