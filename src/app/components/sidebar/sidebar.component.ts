import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { sidebarLinks } from '../../data';
import { CommonModule } from '@angular/common';
import { sidebarLinksI } from '../../models/interface';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sidebarLinks: sidebarLinksI[] = sidebarLinks;

  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  router = inject(Router);

  isActiveRoute(route: String): boolean {
    // console.log(this.router.url, route);
    return this.router.url === route;
  }

  constructor() {
    this.matIconRegistry.addSvgIconSet(
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svgs/xyz.svg')
    );
  }
}
