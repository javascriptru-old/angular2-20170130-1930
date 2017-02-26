import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable()
export class AuthService {
  private authStatus: boolean = false;

  constructor(private _userService: UserService) {
  }

  initAuth(login: string, password: string): Observable<boolean> {
    login = login.toLowerCase();
    password = password.toLowerCase();

    return this._userService.getUserList()
      .switchMap(list => Observable.of(this.authStatus = list.some(
        user => user.firstName.toLowerCase() === login && user.surname.toLowerCase() === password
      )));
  }

  getAuthStatus(): Observable<boolean> {
    return Observable.of(this.authStatus);
  }
}
