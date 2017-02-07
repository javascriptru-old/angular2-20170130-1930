import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-cards-wrapper',
  templateUrl: './user-cards-wrapper.component.html',
  styleUrls: ['./user-cards-wrapper.component.css']
})
export class UserCardsWrapperComponent implements OnInit {

  @Input('users') users;

  constructor() {
  }


  ngOnInit() {

  }


}
