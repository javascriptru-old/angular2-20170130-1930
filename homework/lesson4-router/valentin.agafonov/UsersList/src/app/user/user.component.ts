import { Component } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/pluck'

import { userItem } from '../user-info.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent {

  private user: userItem;
  private userId;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

      this.route.params.pluck('userId').subscribe((userId) => {
        this.userId = userId;        
      });

      this.route.data.pluck('userInfo').subscribe((data:any) => {
        this.user = data.userInfo;
      });

  }

}
