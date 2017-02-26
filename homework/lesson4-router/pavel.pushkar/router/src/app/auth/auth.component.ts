import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  public message: string;

  constructor(private _auth: AuthService) { 
      if(this._auth.isLoggedIn()){
        this.message = "Вы авторизованы"
      } else {
        this.message = "Введите данные"
      }
  }

  public onSubmit(login: string, password: string){
    if(this._auth.login(login, password)){
      this.message = "Вы получили доступ"
    } else {
      this.message = "Неверные данные"
    }
    return false;
  }

  public logOut(): boolean{
    this._auth.isLoggedOut();
    this.message = "Вы вышли";
    setTimeout(function(){
      this.message = "Введите данные";
    }.bind(this),2500);
    return false;
  }

  ngOnInit() {
  }

}
