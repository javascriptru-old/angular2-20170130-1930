import { Component, OnInit } from '@angular/core';
import { users, User } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedUser: User;
  title: string = 'Список пользоватей!';
  users: User[] = users;

  ngOnInit(): void {
    this.onSelect(users[0]);
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
