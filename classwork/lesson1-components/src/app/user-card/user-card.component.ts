import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user;
  @Output() myEvent: EventEmitter<string>  = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  dosomething(text) {
    this.myEvent.emit(text);
  }

}
