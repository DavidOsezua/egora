import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SettingItemI } from '../../models/interface';
import { staticdata } from '../../data';
import { RouterLink } from '@angular/router';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-static-data',
  imports: [ContainerComponent, CommonModule, MatIconModule, RouterLink, SearchComponent],
  templateUrl: './static-data.component.html',
  styleUrl: './static-data.component.css',
})
export class StaticDataComponent {
  staticData: SettingItemI[] = staticdata;

  private registry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  constructor() {
    this.registry.addSvgIconSet(
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/staticDataIcon.svg'
      )
    );
  }
}
