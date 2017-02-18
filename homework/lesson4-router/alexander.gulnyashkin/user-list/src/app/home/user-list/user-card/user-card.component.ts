import { Component, OnInit, Input } from '@angular/core';
import { UserCard } from './user-card.interface';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

    @Input() public user: UserCard ;

    constructor() {}

    ngOnInit() {}
}
