import { Component, OnInit } from '@angular/core';
import users from '../../users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: {
    id: number,
    fullName: string,
    avatarUrl: string,
    birthdate: string,
    gender: string,
    address: string,
    email: string
  }[] = users;

  constructor() { }

  ngOnInit() {
  }

  deleteUser(userId: number): void {
    this.usersList = this.usersList.filter(({id}) => id != userId);
  }
}
