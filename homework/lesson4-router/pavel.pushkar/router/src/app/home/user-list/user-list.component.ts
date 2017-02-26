import { UserList } from './../../userlistservice';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from './../../user';

import 'rxjs/add/operator/pluck';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit {
  
    public users;
     constructor(private _route: ActivatedRoute) { 
        this._route.data.pluck('users').subscribe(data => {return this.users =  data});
      }

 
     public deleteUser(user){
       let index = this.users.indexOf(user);
     //console.log(this.users);
       this.users.splice(index, 1);
      };

  ngOnInit() {
  }

}
