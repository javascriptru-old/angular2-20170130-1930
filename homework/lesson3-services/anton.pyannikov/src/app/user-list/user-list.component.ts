import {Component, OnInit} from '@angular/core';
import {User} from "../custom-interfaces";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  users: User[] = null;

  constructor(private _userService: UserService) {
  }

  refreshData(): void {
    this.users = null;

    this._userService.getUsers().subscribe(result => {
      this.users = result.json();
    });
  }

  removeUser(userIndex: number) {
    this.users.splice(userIndex, 1);
  }

  ngOnInit() {
  }

}
