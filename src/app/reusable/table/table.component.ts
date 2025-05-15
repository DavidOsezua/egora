import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [CommonModule, RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() tableData: any[] = [];
  @Input() columnData: string[] = [];

  @Input() actionActiveId: number | null = null;

  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() action = new EventEmitter();

  editData(item: any): void {
    this.onEdit.emit(item);
  }

  deleteData(item: any): void {
    this.onDelete.emit(item);
  }

  actionHandler(item: number) {
    console.log(item, this.actionActiveId);
    this.action.emit(item);
    // this.actionState = !this.actionState;
  }
}
