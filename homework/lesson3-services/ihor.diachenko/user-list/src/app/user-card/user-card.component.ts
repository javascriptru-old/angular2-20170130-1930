import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {User} from '../user'
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit,OnChanges {

  @Input('user') user: User;
  @Output() userDeleted:EventEmitter<User> = new EventEmitter();
  public githubAccounts: any[];

  constructor(private usersService: UsersService) {
  }

  getGithubAccounts() {

    this.usersService.getGithubAccounts(this.user.firstName).subscribe(
        accounts => {this.githubAccounts = accounts}
    )
  }

  onDelete() {
    this.userDeleted.emit(this.user);
    this.user = void(0);
  }

  ngOnInit() {

  }

  ngOnChanges() {

    if(this.user) {
      this.getGithubAccounts();
    }

  }

}
