import { Component, Input, OnInit } from '@angular/core';
import {Response} from "@angular/http";
import { UserService } from '../app/userService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class AppComponent implements OnInit {
  title: String = 'List of users';
  listOfUsers: String[];

  constructor(public userService: UserService) {}

  public onDeleteUser(user) {
    this.listOfUsers.splice(this.listOfUsers.indexOf(user), 1)
  }

  ngOnInit () {
    this.userService.getUsers().subscribe(( data: Response) => {
      this.listOfUsers = data.json()
    });
  }
}
