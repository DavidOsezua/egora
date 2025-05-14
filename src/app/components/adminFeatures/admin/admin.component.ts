import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../../container/container.component';
import { IAdmin, SettingItemI } from '../../../models/interface';
import { adminData } from '../../../data';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '../../search/search.component';

@Component({
  selector: 'app-admin',
  imports: [
    ContainerComponent,
    CommonModule,
    MatIconModule,
    RouterLink,
    SearchComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  adminData: IAdmin[] = adminData;

  private matRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  constructor() {
    this.matRegistry.addSvgIconSet(
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/svgs/admin.svg')
    );
  }
}
