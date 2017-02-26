import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from "../app.component"
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    constructor(private usrSvc: UserServiceService, private _http: Http) { }

    ngOnInit() {
             
    }

    public usrsFound(): boolean {
        return (this.usrSvc.usersLst != undefined) && (this.usrSvc.usersLst.length > 0);
    }

    public selUser(user: User): void {
        if (this.usrSvc.usersLst != undefined && user != undefined) {
            this.usrSvc.usersLst.map(x => x.selected = false);
            user.selected = true;
        }
    }

    public getUser(user: User): void {
        if (this.usrSvc.usersLst != undefined && user != undefined) {            
            let o = this._http.get('https://api.github.com/search/users?q=' + user.surname);
            o.subscribe((data: any) => {
                if (JSON.parse(data._body).items.length > 0) {
                    // можно было бы оформить получше, чем алерт - но запрос все равно не вернет ничего, т.к. передавать надо логин, а его нет.
                    // ну а смысл - понятен :)
                    alert(JSON.parse(data._body).items.map(o => o["html_url"]));
                }
            });
        }
    }

}
