import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  public setUsersListSourceUrl(newUrl: string): void {
    this.usersListSourceUrl = newUrl;
  }

  public getUsers(): Observable<any> {
    if (!this.usersListSourceUrl) {
      return;
    }
    return this.http.get(this.usersListSourceUrl).map(resp => resp.json());
  }

  public setSearchAccountUrl(newUrl: string): void {
    this.searchAccountUrl = newUrl;
  }

  public searchGitAccounts(substr: string): Observable<any> {
    if (!this.searchAccountUrl) {
      return;
    }
    return this.http.get(`${this.searchAccountUrl}${substr}`)
      .delay(1000)
      .switchMap(result => result.json().items)
      .take(5);
  }

  private usersListSourceUrl: string;
  private searchAccountUrl: string;

}
