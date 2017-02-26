import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {User, GithubAccount} from "./custom-interfaces";
import "rxjs/add/operator/take";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  private userListUrl: string = 'https://learn.javascript.ru/courses/groups/api/participants?key=1kmtdtv';
  private githubUrl: string = 'https://api.github.com/search/users?q=';
  private init: Observable<any> = Observable.of("");
  private delayTime: number = 1000;

  private userList: User[] = null;
  private accountList: GithubAccount[] = null;

  constructor(private _http: Http) {
  }

  getUserList(): Observable<User[]> {
    return this.userList ? Observable.of(this.userList) :
      this.init
        .delay(this.delayTime)
        .switchMap(() => this._http.get(this.userListUrl))
        .map(list => this.userList = list.json());
  }

  getGithubAccounts(firstName: string): Observable<GithubAccount[]> {
    return this.accountList ? Observable.of(this.accountList) :
      this.init
        .delay(this.delayTime)
        .switchMap(() => this._http.get(`${this.githubUrl}${firstName}`))
        .map(list => list.json().items.slice(0, 5));
  }
}
