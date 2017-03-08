/**
 * Angular
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/**
 * Rxjs
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
/**
 * Services
 */
import { UserService } from './user.service';

@Injectable()
export class AuthService {

    constructor(private _http: Http,
        private _userService: UserService) {
    }

    public login (email: string, password: string): Observable<boolean> {
        return this._userService.checkUserAuth(email, password)
            .do((response: boolean) => {
                if (response === true) {
                    localStorage.setItem('user', email);
                }
            });
    }

    public logout () {
        localStorage.removeItem('user');
    }
}
