import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../../../container/container.component';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-new-users',
  imports: [ContainerComponent, CommonModule],
  templateUrl: './new-users.component.html',
  styleUrl: './new-users.component.css',
})
export class NewUsersComponent {
  private location = inject(Location);

  goBack(): void {
    this.location.back();
  }
}
