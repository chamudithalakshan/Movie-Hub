import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-admin-manage-film',
  standalone: true,
  imports: [],
  templateUrl: './admin-manage-film.component.html',
  styleUrl: './admin-manage-film.component.css'
})
export class AdminManageFilmComponent {
  @Output() toggle: EventEmitter<string> = new EventEmitter<string>();

  toggleComponent(component: string) {
    this.toggle.emit(component);
  }
}
