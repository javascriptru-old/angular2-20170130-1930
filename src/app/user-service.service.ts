import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';


declare function fetch(url: string);

import {User} from './user';

@Injectable()
export class UserServiceService {

  constructor(private _http: Http) {}
  private users: User[] = [];
  private account: any[] = [];
  public getList(): Observable < User[] > {
    return this._http.get(`users.json`) //записал в user.json данные 10-ти пользователей, чтобы не банилось
      .map((resp: Response) => resp.json())
      .map((resp: Response) => this.getUser(resp))
      .switchMap((e) => this.getGit(e)) //получаем поток из промиса
      .map((resp) => this.users
      )
  };
  public getGit(e, i: number = 0) {
    let m; //создаем поток
    var currentuser = this.users[i];
    if (currentuser) {
         m = fetch(`https://api.github.com/search/users?q=` + e[i].surname )
        .then(responce => responce.json())
        .then(responce => e[i].accounts.push(responce.items.slice(0, 5).map(obj => obj.login)));
         this.getGit(this.users, i + 1) //вызываем getGit
    }
    return Rx.Observable.fromPromise(m); // возвращаем поток из промиса
  }

  //заполняем поля для user
  public getUser(resp) {
    for (let index in resp) {
      let user = resp[index];
      this.users.push({
        firstName: user.firstName,
        surname: user.surname,
        photo: user.photo || "",
        country: user.country,
        accounts: []
      })
    }
    return this.users;
  }
}
