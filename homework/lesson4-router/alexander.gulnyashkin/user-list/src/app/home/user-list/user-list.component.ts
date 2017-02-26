import { Component, OnInit, Input } from '@angular/core';
import { UserCard } from './user-card/user-card.interface';
import { UserService } from './user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    providers: [UserService]
})
export class UserListComponent implements OnInit {

    public users: Array<UserCard> ;

    constructor (private _userService: UserService) {
        this._userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }

    ngOnInit() {}
}
