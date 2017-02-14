import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../user'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input('user') user: User;
  @Output() userDeleted:EventEmitter<User> = new EventEmitter();

  constructor() {
  }

  onDelete() {
    this.userDeleted.emit(this.user);
    this.user = void(0);
  }

  ngOnInit() {
  }

}
