import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user;
  @Output("deleteUser") delUser: EventEmitter<any> = new EventEmitter();

  isSelectUser:boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  deleteUser():any {
    this.delUser.emit(this.user);
  }
}
