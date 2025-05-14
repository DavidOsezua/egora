import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() search = new EventEmitter();

  searchFunction(item: string): void {
    this.search.emit(item);
  }
}
