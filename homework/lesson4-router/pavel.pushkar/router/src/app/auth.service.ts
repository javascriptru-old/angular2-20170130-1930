import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public login(user: string, password: string) {
    return Observable.create((observer) => {
      if (user === "login" && password === "password") {
        localStorage.setItem('user', user)
        observer.next(true);
      }
      observer.next(true);
    });
  }

  public isLoggedIn(): boolean {
    return !!(localStorage.getItem("user") || null);
  }

  public isLoggedOut(): boolean {
    localStorage.removeItem("user")
    return false;
  }

}
