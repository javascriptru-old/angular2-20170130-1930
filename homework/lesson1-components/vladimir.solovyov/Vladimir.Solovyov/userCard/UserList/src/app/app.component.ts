import { Component } from '@angular/core';
import { User } from "./user"
import usersJSON  from "../users";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
 users: User[];

  ngOnInit() {
    if (usersJSON instanceof Array) {
      this.users = usersJSON.map(obj => new User(obj));
    }
  }

  selectUser(user){
    if (this.users != undefined && user != undefined) {
      this.users.map(x => x.selected = false);
      user.selected = true;
    }
  }

 deleteUser(user) {
    if (this.users != undefined && user != undefined) {
      if (this.users.indexOf(user)>=0) this.users.splice(this.users.indexOf(user), 1);
    }
  }
}