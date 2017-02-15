import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UserService {
  constructor (private http: Http) {
  }

  getUsers(){
    return this.http.get('https://raw.githubusercontent.com/javascriptru/angular2-20170130-1930/master/homework/users.json');
  }
}

