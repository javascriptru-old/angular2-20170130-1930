import { User } from '../user';
import { UserService } from '../user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  providers: [ UserService ]
})
export class UserCardComponent implements OnInit {

  @Input() public user: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  someMethod():void {
    this._userService.getOne(1).subscribe( (user: User) => this.user = user);
  }

}
