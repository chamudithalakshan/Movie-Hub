import {RouterModule, Routes} from '@angular/router';
import {FilmDetailsComponent} from "./film-details/film-details.component";

import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdminAddfilmComponent} from "./admin-addfilm/admin-addfilm.component";
import {AdminManageFilmComponent} from "./admin-manage-film/admin-manage-film.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  { path: 'film-details/:id', component: FilmDetailsComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'admin', component: AdminHomeComponent },
  { path: 'admin', 'title': "From", component: AdminHomeComponent,
    children: [
      {path: 'addFilm', data: {title: 'Dashboard'}, component: AdminAddfilmComponent},
       {path: 'manageFilm', data: {title: 'Dashboard'}, component: AdminManageFilmComponent},
       {path: '', data: {title: 'Dashboard'}, component: AdminDashboardComponent},
    ]},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
