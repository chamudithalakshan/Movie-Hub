import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-admin-addfilm',
  standalone: true,
  imports: [ RouterOutlet,
    RouterLink,
    RouterLinkActive],
  templateUrl: './admin-addfilm.component.html',
  styleUrl: './admin-addfilm.component.css'
})
export class AdminAddfilmComponent {
  @Output() toggle: EventEmitter<string> = new EventEmitter<string>();

  toggleComponent(component: string) {
    this.toggle.emit(component);
  }
}
