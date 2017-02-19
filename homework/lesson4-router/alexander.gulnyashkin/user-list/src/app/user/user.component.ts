import { Component, OnInit } from '@angular/core';
import { UserCard } from './../home/user-list/user-card/user-card.interface';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/pluck';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    public user: UserCard;

    constructor(private _route: ActivatedRoute) {
        this._route.data.subscribe(data => {
            this.user = (<any>data).user;
            console.log(this.user);
        });
    }

    ngOnInit() {}

}
