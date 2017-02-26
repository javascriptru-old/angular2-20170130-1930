import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../user.service';
import {Location} from '@angular/common';

import 'rxjs/add/operator/pluck'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/do'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

export class UserComponent implements OnInit {

  public userId;
  public user: User;
   
  constructor(private _route: ActivatedRoute,private _userservice: UserService,private location: Location) { 
      this._route.params.pluck('userId').subscribe(data =>{return this.userId = data});
      let id = +this.userId;
      this._userservice.query
                       .map((e) => e.filter(function(item){return item.userId ==id}))
                       .subscribe((e) => this.user = e[0]);
  }
  
  ngOnInit() {
  }
  back(): void {
    this.location.back();
  }
}
