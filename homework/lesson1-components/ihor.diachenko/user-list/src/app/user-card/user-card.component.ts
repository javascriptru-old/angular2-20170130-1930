import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input('user') user;
  @Output() userDeleted:EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  onDelete() {
    alert("Delete");
    this.userDeleted.emit(this.user);
    this.user = void(0);
  }

  ngOnInit() {
  }

}
