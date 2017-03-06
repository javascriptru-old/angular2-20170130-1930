import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {
  constructor(private _userService: UsersService, private router: Router) {
  }

  private form: FormGroup = new FormGroup({    
    email: new FormControl('', [Validators.required,
      Validators.pattern("[a-zA-Z0-9_]+@[a-zA-Z0-9_]+.(ru|com)")]),
    password: new FormControl('', [Validators.required])
  });

  private userExist: boolean  = true;

  ngOnInit() {
  }

  onSubmit() {
    if (this._userService.userExist(
      this.form.controls['email'].value,
      this.form.controls['password'].value)) {
        this.userExist = true;
        this.router.navigateByUrl('/success');
      }
    else {
      this.userExist = false;
    }
  }

}
