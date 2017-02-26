import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public login(user: string, password: string){
    if(user === "login" && password === "password" ) {
      localStorage.setItem('user', user)
      return true;
    }
    return false;
  }

  public isLoggedIn():boolean{
    return !!(localStorage.getItem("user") || null);
  }

  public isLoggedOut():boolean{
    localStorage.removeItem("user")
    return false;
  }

}
