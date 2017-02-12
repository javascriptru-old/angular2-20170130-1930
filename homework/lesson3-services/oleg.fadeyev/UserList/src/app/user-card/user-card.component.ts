import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from "../app.component"

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

    @Input() user: User;
    @Output() onSelect: EventEmitter<User> = new EventEmitter();
    @Output() onGetInfo: EventEmitter<User> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    public getInfo(e: PointerEvent): void {
        this.onGetInfo.emit(this.user);
    }

    public select(e): void {
        this.onSelect.emit(this.user);
    }
}
