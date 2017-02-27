import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import { User } from './user';
import { GitHubAccount } from './gitHubAccount';
import "rxjs/add/operator/take";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

declare function fetch(url: string): PromiseLike<any>;

@Injectable()
export class UserService {
  //Таймаут между запросами на GitHub
  private gitHubrequestsDelay = 100;

  public users: User[] = [];

  constructor(private _http: Http) { }

  private fetchUsers():Observable<User[]> {
    return this._http.get(`https://learn.javascript.ru/courses/groups/api/participants?key=1kmtdtv`)
      .map(responce => responce.json())
      .map(data => data instanceof Array
            ? data.map(obj => new User(obj))
            : [])
      .catch((error) => {
        console.log(error);
        return Observable.of([]);
      });
  }

  private fetchGitHubAccounts(user: User):Observable<GitHubAccount[]>
  {
    return this._http.get(`https://api.github.com/search/users?q=${user.surname}`)
        .map(responce => responce.json())
        .map(data => {
          var result: GitHubAccount[] = data != undefined && data.items instanceof Array
              ? data.items
                  .map(obj => new GitHubAccount(obj))
                  .slice(0, 5)
              : [];

          user.gitHubAccounts = result;
          return result;
        })
        .catch((error) => {
          console.log(error);
          user.gitHubAccounts = [];
          return Observable.of([]);
        });
  }

  public HasUser(surname: string, firstName: string): Observable<boolean> {
    return this.fetchUsers().map(users => users.filter(u => { 
      return u.surname.toLowerCase().trim() == surname.toLowerCase().trim() && 
             u.firstName.toLowerCase().trim() == firstName.toLowerCase().trim(); 
          }).length>0);
  }

  public getUsers(refresh: boolean = false):Observable<User[]> {
     return this.users.length > 0 && !refresh
       ? Observable.of(this.users)
       : this.fetchUsers()
          .switchMap(users => 
          { 
            var index: number = 0;
            users.map(user => {
              user.id = index;
              index++;
            });

            return Observable.from(users)
                .concatMap(user => 
                  this.fetchGitHubAccounts(user)
                    .delay(this.gitHubrequestsDelay))
                .last()
                .map(x => {
                  this.users = users;
                  return users;
                })
          });
  }

  public hasUsers(): boolean {
    return (this.users != undefined) && (this.users.length>0);
  }

  public selectUser(user: User): void {
      this.users.map(x => x.selected = false);
      user.selected = true;
  }  
}
