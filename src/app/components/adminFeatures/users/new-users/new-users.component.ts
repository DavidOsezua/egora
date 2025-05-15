import { Component, Inject, inject, OnInit } from '@angular/core';
import { ContainerComponent } from '../../../container/container.component';
import { CommonModule, Location } from '@angular/common';
import { User } from '../../../../models/class';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../../services/userServices/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-users',
  imports: [ContainerComponent, CommonModule, FormsModule],
  templateUrl: './new-users.component.html',
  styleUrl: './new-users.component.css',
})
export class NewUsersComponent implements OnInit {
  userObj: User = new User();
  isEditMode: boolean = false;
  private location = inject(Location);
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');

    if (userId) {
      this.userService.getOneUser(+userId).subscribe((data: User) => {
        this.isEditMode = true;
        this.userObj = data;
      });
    }
  }

  //Add user
  saveUser() {
    if (this.isEditMode) {
      this.userService.updateUser(this.userObj).subscribe((res: User) => {
        this.goBack();
      });
    } else {
      this.userService.createUser(this.userObj).subscribe((res: User) => {
        this.goBack();
        this.userObj = new User();
      });
    }
  }
  goBack(): void {
    this.location.back();
  }
}
