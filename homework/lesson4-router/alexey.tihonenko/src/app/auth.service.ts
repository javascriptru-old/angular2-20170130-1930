import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class AuthService implements CanActivate {
    private authorized:boolean;

    public canActivate(): Observable<boolean> {
        return Observable.of(this.authorized);
    }

    constructor() {
        this.authorized = false;
    }

    public authUser():void {
        this.authorized = true;
    }
}
