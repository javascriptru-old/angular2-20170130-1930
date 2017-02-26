import {Component, OnInit, Input} from "@angular/core";
import {User, GithubAccount} from "../../custom-interfaces";
import {UserService} from "../../user.service";
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/pluck";

@Component({
  selector: 'app-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.css']
})
export class UserCardComponent implements OnInit {
  user: User = null;
  accountList: GithubAccount[] = null;
  private getGithubAccountsEvent = null;

  constructor(private _userService: UserService, private _route: ActivatedRoute) {
    this._route.data.pluck('userListResolver').subscribe(
      userList => {
        this._route.params.pluck('index').subscribe(index => {
          this.user = (<User[]>userList)[+index];
          this.refreshGithubAccounts();
        });
      });
  }

  refreshGithubAccounts(): void {
    this.accountList = null;

    if (this.getGithubAccountsEvent != null) {
      this.getGithubAccountsEvent.unsubscribe();
      this.getGithubAccountsEvent = null;
    }

    this.getGithubAccountsEvent = this._userService.getGithubAccounts(this.user.firstName)
      .subscribe(
        list => this.accountList = list,
        error => console.log(error),
        () => this.getGithubAccountsEvent = null);
  }

  ngOnInit() {
  }

}
