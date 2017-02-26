import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';

@Injectable()
export class UserList implements Resolve<any>{
    public users:User[];
    constructor(private _userservice: UserService) { }
    resolve(){ 
        return  this._userservice.query.map(data =>{return this.users = data;})
    }
  
} 

