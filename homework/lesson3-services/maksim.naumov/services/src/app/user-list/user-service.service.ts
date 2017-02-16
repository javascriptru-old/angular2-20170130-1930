import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/Map';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/reduce';

@Injectable()
export class UserService {
  constructor(private _http: Http) {

  }
  

  getUsers(): Observable<any> {
    return this._http.get("https://learn.javascript.ru/courses/groups/api/participants?key=1kmtdtv") 
      .map(data => data.json())          
  }

  getAccaunts(fullname: string, count: number): Observable<any> {
    let url:string = `https://api.github.com/search/users?q=${fullname}+in:fullname+type:user`;
    return this._http.get(url) 
      .map(data => {
        return data.json().items.slice(0, count);
      })
      .concatAll()
      .map(data => {        
        return data.login;
      })
      .reduce((logins, login) => {
        logins.push(login);
        return logins;
      }, [])
  }
}
