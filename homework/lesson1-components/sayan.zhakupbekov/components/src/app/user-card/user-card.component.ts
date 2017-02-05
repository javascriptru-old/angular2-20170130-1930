import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input('user') user;

  constructor() {
  }

  show: boolean = true;
  blue: boolean = false;

  ngOnInit() {
  }

  deleteItem() {
    this.show = false;
  }

  colorBlue() {
    this.blue = !this.blue;
  }

}
