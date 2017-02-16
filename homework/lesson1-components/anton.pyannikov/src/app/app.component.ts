import {Component} from '@angular/core';
import {usersData} from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './w3.css']
})

export class AppComponent {
  public usersData: Array<Object> = usersData;
  public selectedUser: Object = null;

  removeUser(number) {
    this.usersData.splice(number, 1);
    this.selectedUser = null;
  }
}
