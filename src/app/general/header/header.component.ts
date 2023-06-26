import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  darkMode: boolean;
  isOpen: boolean;

  @Output() darkModeActive: EventEmitter<boolean>;

  constructor() {
    this.isOpen = false;
    this.darkMode = false;
    this.darkModeActive = new EventEmitter();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.darkModeActive.emit(this.darkMode);
  }

  toggleMobile(isOpen: boolean) {
    this.isOpen = isOpen;
  }
}
