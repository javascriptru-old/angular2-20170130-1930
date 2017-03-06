import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of';
var zxcvbn = require('zxcvbn');

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  constructor(private _userService: UsersService, private router: Router) {
  }

  zxcvbn = require('zxcvbn');

  private complexity: string[] = [
    "Weak",
    "Poor",
    "Middle",
    "Strong",
    "Very Strong"
  ]

  private passwordComplexity= "";

  private form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required,
      Validators.pattern("[a-zA-Z0-9_]+@[a-zA-Z0-9_]+.(ru|com)")],
      [this.checkMail.bind(this)]),
    password: new FormControl('', [Validators.required, this.checkPassword])
  })

  checkPassword(password: FormControl): {[key: string]: string} {
    let score = zxcvbn(password.value).score;

    if (score < 2) {
      return {error: "weak password"};
    }

    return null; 
  }

  checkMail(mail: FormControl): {[key: string]: any} {
    return Observable.of( this._userService.mailExist(mail.value) );
  }

  getLabelColor() {
    if (this.form.controls['password'].valid) {
      return "green";
    }

    return "red";
  }

  ngOnInit() {
  }

  onSubmit() {
    this._userService.addUser({
      firstName: this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value,
      mail: this.form.controls['email'].value,
      password: this.form.controls['password'].value
    });    

    this.router.navigateByUrl('/login');
  }

}
