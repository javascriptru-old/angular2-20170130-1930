import { Component, OnInit } from '@angular/core';
import { usersList } from './users'

class User {
    public firstName: string;
    public surname: string;
    public country: string;
    public photo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users = [];

  ngOnInit() {
    this.users = usersList;
  }

  deleteUser(id: number) {
    if (id > -1 && id < this.users.length) {     
      this.users.splice(id, 1);
    }
  }
}
