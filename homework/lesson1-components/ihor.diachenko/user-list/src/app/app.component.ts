import { Component, OnInit } from '@angular/core';
import { users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedUser;
  title: string = 'Список пользоватей!';
  users: Array<any> = users;

  ngOnInit(): void {
    this.onSelect(users[0]);
  }

  onSelect(user): void {
    this.selectedUser = user;
  }

  onDelete(user): void {
    let index = this.users.indexOf(user);

    this.users.splice(index, 1);
  }

}
