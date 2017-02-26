import {Component, OnInit} from "@angular/core";
import {UserService} from "../user.service";
import {User} from "../custom-interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userList: User[] = null;
  private getUserListEvent = null;

  constructor(private _userService: UserService, private _route: ActivatedRoute) {
    this._route.data.pluck('userListResolver').subscribe(result => this.userList = <User[]>result);
  }

  refreshUserList(): void {
    this.userList = null;

    if (this.getUserListEvent != null) {
      this.getUserListEvent.unsubscribe();
      this.getUserListEvent = null;
    }

    this.getUserListEvent = this._userService.getUserList()
      .subscribe(
        result => this.userList = result,
        error => console.log(error),
        () => this.getUserListEvent = null);
  }

  ngOnInit() {
  }

}
