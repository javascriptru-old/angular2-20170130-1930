import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public authError: boolean = false;

  constructor(private _router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  public authorization(surname: string, firstName: string): void{
    this.auth.AuthUser(surname, firstName)
      .subscribe(authResult => {
        this.authError =!authResult;

        if (authResult) {
          this._router.navigateByUrl('/users');
        }
      });
  };
}
