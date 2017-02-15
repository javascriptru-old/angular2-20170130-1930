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
        .map(this.extractUsersData);
  }

  getGithubAccounts(firstname:string): Observable<any[]> {
    let githubUrl = `https://api.github.com/search/users?q=${firstname}&page=1&per_page=5`;

    return this.http.get(githubUrl)
        .map(this.extractGithubData);
  }

  private extractGithubData(res: Response) {
    let body = res.json();

    return body.items || { };
  }

  private extractUsersData(res: Response) {
    let body = res.json();

    return body || { };
  }


}
