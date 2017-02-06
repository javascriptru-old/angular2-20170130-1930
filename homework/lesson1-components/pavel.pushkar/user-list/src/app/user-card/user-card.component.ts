import { Component, OnInit } from '@angular/core';
import { User } from './user-card.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  
  public color: string = "blue";
  public initialColor: string = "";
  public isBlue: boolean = true;
  public users: User[];
  public isMarked: boolean = false;
  //public event:any;

  constructor() { 
    this.users = [
      {
        "id": 1,
        "fullName": "Иванов Иван",
        "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/57.jpg",
        "birthdate": "1976-10-10",
        "gender": "мужской",
        "address": "ул. Звенигороская, 47б",
        "email": "ivanov@mail.ru"
      },
      {
        "id": 2,
        "fullName": "Петров Петр",
        "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/7.jpg",
        "birthdate": "1957-01-14",
        "gender": "мужской",
        "address": "ул.Пушкиская, 13",
        "email": "ivanov@mail.ru"
      },
      {
        "id": 3,
        "fullName": "Натальина Наталья",
        "avatarUrl": "https://randomuser.me/api/portraits/thumb/women/7.jpg",
        "birthdate": "1990-07-03",
        "gender": "женский",
        "address": "ул. Лермонтова, 59",
        "email": "ivanov@mail.ru"
      }
    ];
  }

  addNewUser(name, birthdate, gender, address, email){
    let id = this.users.length + 1;
    let newUser = new User(id, name.value, '',birthdate.value, gender.value, address.value, email.value);
    this.users.push(newUser); 
    console.log(newUser.id);
  }

  changeColor(event): void{
    console.log(event.class);
    //this.isMarked = !this.isMarked;
    event.class.marked = this.isMarked; 
  }

  deleteUser(user){
    let index = this.users.indexOf(user);
    this.users.splice(index,1);
  }

  ngOnInit() {
  }

}
