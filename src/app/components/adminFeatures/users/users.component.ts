import { Component } from '@angular/core';
import { ContainerComponent } from '../../container/container.component';
import { SearchComponent } from '../../search/search.component';
import { TableComponent } from '../../../reusable/table/table.component';
import { PaginationComponent } from '../../../reusable/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { User } from '../../../models/class';
import { users } from './data';

@Component({
  selector: 'app-users',
  imports: [
    ContainerComponent,
    SearchComponent,
    TableComponent,
    RouterLink,
    PaginationComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  //Variables
  userData: User[] = users;
  columnData: string[] = [
    'fullName',
    'email',
    'branch',
    'roles',
    'status',
    'action',
  ];
  filteredData: User[] = this.userData;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  searchTerm: string = '';
  actionActiveID: number | null = null;

  totalPages: number = Math.ceil(this.filteredData.length / this.itemsPerPage);

  get numberOfItems(): number {
    return this.filteredData.length;
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }
  get endIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.numberOfItems);
  }

  //Data here has been sliced
  paginatedData(): User[] {
    return this.filteredData.slice(this.startIndex, this.endIndex);
  }

  //Search Function
  onSearch(searchItem: string) {
    this.searchTerm = searchItem;
    this.applyFilters();
  }

  //A flexible and scalable filter function
  applyFilters(): User[] {
    this.filteredData = this.userData.filter((data) => {
      const matchesSearch = Object.values(data)
        .join()
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());

      return matchesSearch;
    });
    this.currentPage = 1;

    return this.filteredData;
  }

  //Pagiantion Next Function
  next(): void {
    debugger;
    if (this.currentPage === this.totalPages) {
      return;
    } else {
      this.currentPage++;
    }
  }

  //Pagination Previous Function
  previous(): void {
    if (this.currentPage === 1) {
      return;
    } else {
      this.currentPage--;
    }
  }

  openActions(userID: number): void {
    this.actionActiveID = this.actionActiveID === userID ? null : userID;
  }
  //
}
