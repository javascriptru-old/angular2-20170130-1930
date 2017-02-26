import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  login: string = null;
  password: string = null;

  constructor(private _router: Router, private _authService: AuthService) {
  }

  aaa(): void {
    this._authService.initAuth(this.login, this.password)
      .subscribe(
        result => this._router.navigateByUrl(result ? '/users' : '')
      );
  }

  ngOnInit() {
  }

}
