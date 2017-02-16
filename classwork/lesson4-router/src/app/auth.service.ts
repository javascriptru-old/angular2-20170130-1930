import { CanActivate } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class AuthService implements CanActivate {

  canActivate(): Observable<boolean> {
    return Observable.of(true);
  };

}
