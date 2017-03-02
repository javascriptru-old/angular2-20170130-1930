import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService implements CanActivate {

  private loggedIn = Observable.of(false);

  public canActivate(): Observable<boolean> {
    return this._authService.loggedIn;
  };

  public tryLogin(login: string, password: string) {
    if (login === 'test' && password === 'test') {
      /*

      Тут должно переключаться состояние loggedIn

      Но как это сделать так, чтобы уведомить всех подписчиков?

      this.loggedIn.set(true)

      */
    }
  };

}
