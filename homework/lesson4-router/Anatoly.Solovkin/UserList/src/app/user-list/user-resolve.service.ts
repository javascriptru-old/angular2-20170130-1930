import {Injectable} from "@angular/core";
import { Resolve } from '@angular/router';
import {UserService} from "../user-service.service";
import {User} from "../user";
import {Observable} from "rxjs";

@Injectable()
export class UserResolveService implements Resolve<Observable<User[]>> {

  constructor(private userServise: UserService) { }

  resolve(): Observable<User[]> {
    return this.userServise.getUsers();
  }
}
