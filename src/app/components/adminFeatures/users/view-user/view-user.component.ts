import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../../../container/container.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-user',
  imports: [ContainerComponent],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css',
})
export class ViewUserComponent {
  private location = inject(Location);

  goBack() {
    this.location.back();
  }
}
