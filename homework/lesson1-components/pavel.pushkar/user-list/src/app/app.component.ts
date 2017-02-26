import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public users = [
  {
    "id": 1,
    "fullName": "Иванов Иван",
    "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/57.jpg",
    "birthdate": "1976-10-10",
    "gender": "мужской",
    "address": "ул. Звенигороская, 47б",
    "email": "ivanov@mail.ru",
    "selected":false
  },
  {
    "id": 2,
    "fullName": "Петров Петр",
    "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/7.jpg",
    "birthdate": "1957-01-14",
    "gender": "мужской",
    "address": "ул.Пушкиская, 13",
    "email": "ivanov@mail.ru",
    "selected":false
  },
  {
    "id": 3,
    "fullName": "Натальина Наталья",
    "avatarUrl": "https://randomuser.me/api/portraits/thumb/women/7.jpg",
    "birthdate": "1990-07-03",
    "gender": "женский",
    "address": "ул. Лермонтова, 59",
    "email": "ivanov@mail.ru",
    "selected":false
  }
];

public selectUser(user): void {
  this.users.map(x => x.selected = false);
  user.selected = true;

  
}

public deleteUser(user) :void{
  var index = this.users.indexOf(user);
  this.users.splice(index, 1);
}

}
