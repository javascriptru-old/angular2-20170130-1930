import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService implements CanActivate {
    private _isAuth: boolean;
    private _login: string;
    private _password: string;

    constructor () {
        this._isAuth = false;
        this._login = 'alex';
        this._password = '123';
    }

    public canActivate (): Observable<boolean> {
        return Observable.of(this.isAuth());
    }
    /**
     * Возвращает, авторизован ли пользователь в приложении или нет.
     */
    public isAuth (): boolean {
        return this._isAuth;
    }
    /**
     * Авторизует пользователя.
     */
    public logIn (login: string, password: string): boolean {
        if (login === this._login
            && password === this._password) {
            this._isAuth = true;
            return true;
        }
        return false;
    }
    /**
     * Разавторизует пользователя.
     */
    public logOut (): void {
        this._isAuth = false;
    }
}
