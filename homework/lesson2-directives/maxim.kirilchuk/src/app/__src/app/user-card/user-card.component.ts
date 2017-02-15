import { Component, EventEmitter, OnInit, Input, Output, AfterViewInit, AfterViewChecked } from '@angular/core';
import { UserService } from '../userService';
import {debug} from "util";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],

})
export class UserCardComponent implements OnInit, AfterViewInit, AfterViewChecked, Output {
  @Input() users: String[];
  @Output() onDeleteUser = new EventEmitter<any>();
  isListEmpty: boolean;
  constructor(private userService: UserService) { }

  public deleteUser(user) {
    this.onDeleteUser.emit(user);
  }

  ngOnInit() {}

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
    if (this.users) {
      this.isListEmpty = !!this.users.length;
    }
  }
}
