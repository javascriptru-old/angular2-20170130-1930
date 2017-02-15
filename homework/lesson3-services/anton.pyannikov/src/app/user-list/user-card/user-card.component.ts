import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User, GithubAccount} from "../../custom-interfaces";
import {UserService} from "../../user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: User = null;
  @Output() removeUser: EventEmitter<any> = new EventEmitter();
  accountsList: GithubAccount[] = null;
  private loadEvent = null;

  constructor(private _userService: UserService) {
  }

  getAccountsList(): void {
    this.accountsList = [];

    if (this.loadEvent != null) {
      this.loadEvent.unsubscribe();
      this.loadEvent = null;

      return;
    }

    this.loadEvent = this._userService.getFirstFiveAccounts(this.user.firstName).subscribe(
      result => {
        if (this.accountsList) {
          this.accountsList.push(result);
        }
      },
      error => console.log(error),
      () => this.loadEvent = null
    )
    ;
  }

  ngOnInit() {
  }
}
