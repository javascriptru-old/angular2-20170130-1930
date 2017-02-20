import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService implements Resolve<any> {
  resolve(route):Observable<any> {
    return this.http.get('http://irbisc.tmweb.ru/user_info.php?id=' + route.params.userId)
    .map(response => response.json());
  }

  constructor(private http:Http ) {

  }

}
