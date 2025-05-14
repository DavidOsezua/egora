import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() totalNumberOfItems: number = 0;
  @Input() numberOfItemsPerPages: number = 0;
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  selectedButtons: number = 1;

  previousBtn(): void {
    debugger;
    this.previous.emit();
  }

  nextBtn(): void {
    debugger;
    this.next.emit();
  }

  selectPageNumber(pageNumber: number): void {
    this.selectedButtons = pageNumber;
  }
}
