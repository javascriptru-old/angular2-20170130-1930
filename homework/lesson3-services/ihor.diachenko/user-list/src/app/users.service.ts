import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {User} from "./user";

@Injectable()
export class UsersService {
  private usersUrl = 'https://learn.javascript.ru/courses/groups/api/participants?key=1kmtdtv';

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
        .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();

    return body || { };
  }


}
