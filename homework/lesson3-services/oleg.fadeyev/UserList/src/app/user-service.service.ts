import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from "./app.component"

@Injectable()
export class UserServiceService {
    private waitforusers: Observable<any[]>;

    constructor(private _http: Http) {
        this.waitforusers = this._http.get('https://learn.javascript.ru/courses/groups/api/participants?key=1kmtdtv').map((data: any) => JSON.parse(data._body).map(obj => new User(obj)));
    }

    getAll() {
       return this.waitforusers;
    }

}
