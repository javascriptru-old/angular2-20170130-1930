import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/take";
import 'rxjs/add/operator/delay';



@Injectable()
export class UserService {
  private usersUrl: string = "https://learn.javascript.ru/courses/groups/api/participants?key=1kmtdtv";
  private accountsUrl: string = "https://api.github.com/search/users?q=";

  constructor(private _http: Http) {
  }

  getUsers(): Observable<any> {
    return this._http.get(this.usersUrl);
  }

  getFirstFiveAccounts(userFirstName: string): Observable<any> {
    return this._http
      .get(`${this.accountsUrl}${userFirstName}`)
      .delay(1000)
      .switchMap(result => result.json().items)
      .take(5);
  }
}
