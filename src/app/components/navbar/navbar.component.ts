import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  staggerItems = [
    { icon: '📈', text: 'Sales' },
    { icon: '👥', text: 'Team' },
    { icon: '💼', text: 'Projects' },
    { icon: '📋', text: 'Tasks' },
    { icon: '🔔', text: 'Notifications' },
  ];
  dropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
