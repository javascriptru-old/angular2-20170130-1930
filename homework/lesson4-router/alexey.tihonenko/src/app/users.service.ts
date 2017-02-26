import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService implements Resolve<any> {
  resolve():Observable<any> {
    return this.http.get('http://irbisc.tmweb.ru/users.php')
    .map(response => response.json());
  }

  constructor(private http:Http ) {

  }

}
