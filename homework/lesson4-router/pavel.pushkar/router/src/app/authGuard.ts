import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate{
     
    constructor(private _auth: AuthService) { }
    
    canActivate():boolean {
        return this._auth.isLoggedIn();
    } 
} 

