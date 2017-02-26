import { Injectable } from '@angular/core';
import { User } from './user';
import { GitHubAccount } from './gitHubAccount';

declare function fetch(url: string): PromiseLike<any>;

@Injectable()
export class UserService {

  public users: User[] = [];

  constructor() { }


  private getGitHubAccounts(users: User[], index: number = 0)
  {
    /*Т.к. при параллелной отправке запросов на GitHub в асинхронном режиме велика вероятность быть забаненым, то
      реализуем последовательный процесс отправки запросов на GitHub для того, чтобы снизить риск быть забаненым.
      К сожадению GitHub банит все равно */
    var targetuser = users[index];
    if (targetuser){
      fetch(`https://api.github.com/search/users?q=${targetuser.surname}`)
        .then(responce => responce.json())
        .then(data => {
          targetuser.gitHubAccounts = data.items != undefined && data.items instanceof Array
            ? data.items.map(obj => new GitHubAccount(obj)).slice(0, 5)
            : [];
          this.getGitHubAccounts(users, index+1);
        })
    }
  }

  public fetchUsers():void {
    fetch(`https://learn.javascript.ru/courses/groups/api/participants?key=1kmtdtv`)
        .then(responce => responce.json())
        .then(data => {
          this.users = data instanceof Array
            ? data.map(obj => new User(obj))
            : [];

          this.getGitHubAccounts(this.users);
        });
  }


  public hasUsers(): boolean {
    return (this.users != undefined) && (this.users.length>0);
  }
}
