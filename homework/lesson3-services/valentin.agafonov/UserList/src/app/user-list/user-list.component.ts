import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styles: [],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  public users = [];

  constructor(private appUserService: UserService) {

    appUserService.setUsersListSourceUrl(
      'https://learn.javascript.ru/courses/groups/api/participants?key=1kmtdtv'
    );

    appUserService.setSearchAccountUrl(
      'https://api.github.com/search/users?q='
    );

    appUserService.getUsers().subscribe(list => {
      this.users = list;
      this.updateAccountsData();
    });

  }

  private updateAccountsData():void {
    // TODO
  }

  ngOnInit() {
  }


}
