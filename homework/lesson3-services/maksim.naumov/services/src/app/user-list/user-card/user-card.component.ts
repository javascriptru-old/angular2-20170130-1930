import { UserService } from './../user-service.service';
import { User } from './../user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()
  user: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getAccaunts([this.user.firstName, this.user.surname].join("+"), 5)
        .subscribe(logins => {
          this.user.logins = logins;
        });
  }

}
