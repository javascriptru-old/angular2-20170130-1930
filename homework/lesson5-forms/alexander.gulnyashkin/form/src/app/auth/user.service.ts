/**
 * Angular
 */
import { Injectable } from '@angular/core';
/**
 * Interfaces
 */
import { User } from './user.interface';
/**
 * Rxjs
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class UserService {
    private _userDatabase: Array<User> = [];

    constructor() {}

    /**
     * Проверяет авторизацию пользователя.
     */
    public checkUserAuth (email: string, password: string): Observable<boolean> {
        // return this._http.post('server/checkUserAuth', [email, password]);
        return this.getUserByEmail(email)
            .flatMap((user: User): Observable<boolean> => {
                if (user && user.password === password) {
                    return Observable.of(true);
                } else {
                    return Observable.of(false);
                }
            })
    }
    /**
     * Запрашивает пользователя по Email.
     */
    public getUserByEmail (email: string): Observable<User> {
        let userId: number = this._userDatabase.findIndex((user: User): boolean => {
            return user.email === email;
        });
        if (userId !== -1) {
            return Observable.of(this._userDatabase[userId]).delay(3000);
        } else {
            return Observable.of(null).delay(3000);
        }
    }
    /**
     * Добавляет пользователя в базу.
     */
    public addUser (user: User): Observable<boolean> {
        this._userDatabase.push(user);
        return Observable.of(true);
    }
}
