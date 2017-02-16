import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input('user') user;
  @Input('idx') idx;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  blue: boolean = false;

  ngOnInit() {
  }

  sendItemNum(num) {
    this.deleteEvent.emit(num);
  }

  colorBlue() {
    this.blue = !this.blue;
  }

}
