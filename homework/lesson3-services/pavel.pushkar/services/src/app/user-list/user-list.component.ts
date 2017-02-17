import { Response } from '@angular/http';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import {User} from './../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserServiceService]
})

export class UserListComponent implements OnInit {
    users: User[] = [];

    constructor(private _userList:UserServiceService) { 
     
     this._userList.getList().subscribe((data) => {
       //debugger  // 1
       this.users = data;
       console.log(this.users)
       //debugger //2
      }
       );   
       
      
     //в первый раз users = [] - пустой массив
     //после первого debuggera users = undefined
     // куда делись данные из users и как ими теперь манипулировать?                
    
      }            
    
    ngOnInit() {}

}
