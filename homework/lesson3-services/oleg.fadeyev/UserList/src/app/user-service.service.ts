import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from "./app.component"

@Injectable()
export class UserServiceService {
    public usersLst: User[];

    constructor(private _http: Http) {
        let o = this._http.get('https://learn.javascript.ru/courses/groups/api/participants?key=1kmtdtv');
        o.subscribe((data: any) => {            
            this.usersLst = JSON.parse(data._body).map(obj => new User(obj));            
        });  
    }

}
