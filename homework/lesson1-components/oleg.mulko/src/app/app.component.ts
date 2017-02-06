import { Component } from '@angular/core';
import {users} from  './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  usersList: Array<any> = users;

  deleteUser(user):void {
    let indexUser: number = this.usersList.indexOf(user);
    this.usersList.splice(indexUser, 1);
    alert(`Пользователь ${user.firstName} ${user.surname} удален!`);
  }
}
