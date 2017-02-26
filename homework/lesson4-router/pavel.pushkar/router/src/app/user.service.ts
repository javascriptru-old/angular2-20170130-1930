import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from "./user";

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
 
  constructor(private _http: Http) { }

  private users: User[];
  public query = this.getList();
 
  public getList(): Observable<User[]> {
    return this._http.get('https://learn.javascript.ru/courses/groups/api/participants?key=1kmtdtv')
                     .map((resp: Response) => resp.json())
                     .map((resp: Response) => this.getUsers(resp))
  }

  public getUsers(resp):User[]{
    this.users=[];
      for(let index of resp){
        let user = index;
        this.users.push(
          {
          userId: resp.indexOf(index),
          firstName: user.firstName,
          surname: user.surname,
          photo: user.photo || "",
          country: user.country
        }
        );
      }
      return this.users;
  }

 }
