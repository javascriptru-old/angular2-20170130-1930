
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export type userItem = {
  firstName: string,
  surname: string,
  country: string,
  photo?: string,
  selected?: boolean
};

let usersJSON: userItem[] = require('../../../../../users.json');

export class UserInfoService implements Resolve<any> {

  resolve(route): Observable<any> {
    return Observable.of({ userInfo: usersJSON[route.params.userId] });
  };

}
