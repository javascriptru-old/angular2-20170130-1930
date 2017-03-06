import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { User } from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  getOne(userId: number): Observable<User> {
    return this._http.get(`/users/${userId}`).map(result => result.json());
  }

  getAll(): Observable<User[]> {
    return this._http.get(`/users`).map(result => result.json());;
  }

}
