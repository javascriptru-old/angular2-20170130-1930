import { Component } from '@angular/core';
import { User } from "./user"
import usersJSON  from "../users";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public users: User[];

  ngOnInit() {
    if (usersJSON instanceof Array) {
      this.users = usersJSON.map(obj => new User(obj));
    }
  }

  public hasUsers(): boolean {
    return (this.users != undefined) && (this.users.length>0);
  }

  public selectUser(user: User): void {
    if (this.users != undefined && user != undefined) {
      this.users.map(x => x.selected = false);
      user.selected = true;
    }
  }

  public deleteUser(user: User): void {
    if (this.users != undefined && user != undefined &&
        confirm("Вы действительно хотите удалить пользователя \""+user.surname+" "+user.firstName+"\" из списка?")) {
  
      var index =  this.users.indexOf(user);

      if (index>=0)
        this.users.splice(index, 1);
    }
  }
}
