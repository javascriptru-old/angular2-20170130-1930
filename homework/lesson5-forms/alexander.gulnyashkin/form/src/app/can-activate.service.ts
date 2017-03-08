/**
 * Angular
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
/**
 * Rxjs
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class CanActivateService implements CanActivate {

    constructor(private _router: Router) {}

    canActivate(): Observable<boolean> {
        if (localStorage.getItem('user')) {
            return Observable.of(true);
        } else {
            this._router.navigateByUrl('/auth');
            return Observable.of(false);
        }
    }
}
