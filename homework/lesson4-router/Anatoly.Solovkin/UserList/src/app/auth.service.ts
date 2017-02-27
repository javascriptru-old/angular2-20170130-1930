import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user-service.service';
import {Observable} from "rxjs";

@Injectable()
export class AuthService implements CanActivate {
  private _isUserAuth: boolean = false;

  constructor(private userServise: UserService) { }
  
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isUserAuth();
  }

  public AuthUser(surname: string, firstName: string):Observable<boolean> {
    return this.userServise.HasUser(surname, firstName)
      .map(a => {
        this._isUserAuth = a;
        return a;
      });
  }

  public isUserAuth(): Observable<boolean> {
    return Observable.of(this._isUserAuth);
  }
}
