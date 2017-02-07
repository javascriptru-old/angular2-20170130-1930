type User = {
    firstName: string;
    surname: string;
    country: string;
    photo?: string;
};

import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
    blue: boolean = false;
    show: boolean = true;

    @Input() user:User;

    setBlue():void {
        this.blue = true;
    }

    remove():void {
        if (confirm("Удалить пользователя?")) {
            this.show = false;
        }
    }

    constructor() {

    }

    ngOnInit() {

    }
}
