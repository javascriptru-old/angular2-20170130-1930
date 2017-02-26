import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loggedIn = false;
  constructor() { }

  ngOnInit() {
  }

  auth(pass) {
    if(pass == 123) {
      this.loggedIn = true;
      //Как теперь передать признак авторизованности в сервис authService?
      //Как после удачной авторизации сделать редирект на желаемый стейт?
    }
  }

}
