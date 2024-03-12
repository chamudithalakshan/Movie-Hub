import {Injectable} from '@angular/core';
import {Film} from "./model/Film";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  fetchedData = [
    {
      id: 'c001',
      name: "fast x",
      category: "adventure",
      about: "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      imageUrl: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },
    {
      id: '2',
      name: "Wish",
      category: "adventure",
      about:"A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_disney_wish_799_v3_f9abb2f3.jpeg',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },
    {
      id: '3',
      name: "Fighter",
      category: "adventure",
      about:"A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
      imageUrl: 'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/52/24/64/midr1_us_2023_sa_poster_1400x2100_nb_1.jpg',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },
    {
      id: '4',
      name: "Shaitaan",
      category: "adventure",
      about:"A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-namrszxlsp-portrait.jpg',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },
    {
      id: '6',
      name: "The God father",
      category: "adventure",
      about:"A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
      imageUrl: 'https://e0.pxfuel.com/wallpapers/1010/999/desktop-wallpaper-the-godfather-50th-anniversary-movie-poster-the-godfather-movie-poster-thumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },
    {
      id: '7',
      name: "Elemental",
      category: "adventure",
      about:"A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_disney_elemental_v4_793_7f6b85ae.jpeg',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },
    {
      id: '8',
      name: "Training Day",
      category: "adventure",
      about:"A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
      imageUrl: 'https://wallpapers.com/images/hd/training-day-movie-poster-5j6wi09fenbfkya0.jpg',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },
    {
      id: '9',
      name: "Kungfu Panda Four",
      category: "adventure",
      about:"A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
      imageUrl: 'https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1702493212/amc-cdn/production/2/movies/70400/70406/PosterDynamic/161281.jpg',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },
    {
      id: '10',
      name: "One Life",
      category: "adventure",
      about:"A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
      imageUrl: 'https://mediafiles.cineplex.com/Central/Film/Posters/36010_768_1024.jpg',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },
    {
      id: '1',
      name: "Spy",
      category: "adventure",
      about:"A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
      imageUrl: 'https://static.toiimg.com/photo/msid-90908743/90908743.jpg?134124',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },
    {
      id: '12',
      name: "Thor love and Thunder",
      category: "adventure",
      about:"A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
      imageUrl: 'https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },
    {
      id: '13',
      name: "CABRINI",
      category: "adventure",
      about:"A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
      imageUrl: 'https://images.angelstudios.com/image/upload/w_638,h_930,f_webp,c_scale/v1702574747/studio-app/catalog/7b52a924-1803-4b3b-b550-2c1b79d58117',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },
    {
      id: '14',
      name: "Morbius",
      category: "adventure",
      about:"A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
      imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022-thumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },
    {
      id: '15',
      name: "QuantuMania",
      category: "adventure",
      about:"A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
      imageUrl: 'https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_crd_03.jpg',
      videoUrl: 'https://www.youtube.com/embed/ux5rb5qrXOw?si=Qt-UFA_u7MJRTRhG'
    },

  ];

  constructor() {
  }

  getFilmData() {
    return this.fetchedData;
  }

  getFilmById(id: string): Film | undefined {
    return this.fetchedData.find(film => film.id === id);
  }

}
