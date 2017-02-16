import { Component, OnInit } from '@angular/core';
import { User } from './user';

import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedUser: User;
  title: string = 'Список пользоватей!';
  users: User[];

  constructor(private UsersService:UsersService) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.UsersService.getUsers()
        .map((users: User[])=>this.users = users)
        .subscribe(()=>this.onSelect(this.users[0]));

  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  onDelete(user: User): void {
    let index = this.users.indexOf(user);

    this.users.splice(index, 1);

    if (this.selectedUser === user) {
      this.selectedUser = void(0);
    }

  }

}
