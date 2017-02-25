import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../custom-interfaces";
import {UserService} from "../user.service";

@Injectable()
export class UserListResolveService implements Resolve<Observable<User[]>> {
  constructor(private _userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this._userService.getUserList();
  }
}
