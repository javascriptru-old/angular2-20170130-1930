import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: []
})
export class AuthComponent {

  constructor(private authService: AuthService) { }

  userLogin: string = '';
  userPassword: string = '';

  submitAuth() {
    this.authService.tryLogin(this.userLogin, this.userPassword);
  };

}
