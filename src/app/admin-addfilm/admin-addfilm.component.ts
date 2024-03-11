import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-admin-addfilm',
  standalone: true,
  imports: [RouterOutlet,
    RouterLink,
    RouterLinkActive, ReactiveFormsModule, NgIf],
  templateUrl: './admin-addfilm.component.html',
  styleUrl: './admin-addfilm.component.css'
})
export class AdminAddfilmComponent {
  addFilmForm: FormGroup;
  @Output() toggle: EventEmitter<string> = new EventEmitter<string>();
  isFormSubmitted:boolean=false;
constructor() {
  this.addFilmForm=new FormGroup({
    filmName:new FormControl("",[Validators.required]),
    AboutFilm:new FormControl("",[Validators.required]),
    category:new FormControl("",[Validators.required]),
    ServerLink:new FormControl("",[Validators.required])

  })
}

  toggleComponent(component: string) {
    this.toggle.emit(component);
  }
}
