import { Component } from '@angular/core';


/*
 
  Вопрос:
  Хочу использовать тип userItem в другом компоненте, но как? Экспортировать? Или вынести определение в отдельный модуль?

*/

type userItem = {
  firstName: string,
  surname: string,
  country: string,
  photo?: string,
  selected?: boolean
};


let usersJSON: userItem[] = require('../../../../../users.json');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  usersList = usersJSON;

  selectUser(user):void {
    this.usersList.forEach(function (u) {
      u.selected = false;
    });
    user.selected = true;
  }

  removeUser(userIndex):void {
    this.usersList.splice(userIndex, 1);
  }

}
