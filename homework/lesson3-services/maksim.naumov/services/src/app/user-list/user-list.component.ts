import { Http } from '@angular/http';
import { UserService } from './user-service.service';
import { User } from './user';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/do';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private _userService: UserService, private _http:Http) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe(users => {
      this.users = users;
      console.log(this.users);
    })           
  }

}
