/**
 * Angular
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * Rxjs
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/**
 * Services
 */
import { UserService } from './../user.service';
/**
 * Interfaces
 */
import { User } from './../user.interface';
/**
 * Validators
 */
// import { AuthValidators } from './../auth.validators';
/**
 * Another libs
 */
let zxcvbn = require('zxcvbn');

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    public signupForm: FormGroup;
    public error: boolean = false;
    public passwordSafety: Array<string> = ['Weak', 'Poor', 'Middle', 'Strong', 'Very strong'];
    public passwordScore: number;

    constructor(private _formBuilder: FormBuilder,
        private _userService: UserService,
        private _router: Router) {
        this.signupForm = this._createForm();
    }

    /**
     * Если все в порядке, то регистрирует пользователя
     * и делает редирект на странице логина.
     */
    public signup (user: User): void {
        if (this.signupForm.valid) {
            this._userService.addUser(user)
                .subscribe((response: boolean): void => {
                    this._router.navigateByUrl('/login');
                });
        } else {
            this.error = true;
        }
    }
    /**
     * Создает модель формы.
     */
    private _createForm (): FormGroup {
        return this._formBuilder.group({
            firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
            lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
            email: new FormControl('',
                [Validators.required, Validators.pattern(/^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i)],
                [this._isBusyEmail.bind(this)]),
            password: new FormControl('', [Validators.required, this._isNotSafetyPassword.bind(this)]),
        });
    }
    /**
     * Проверяет, свободен ли Email.
     */
    private _isBusyEmail (control: FormControl): Observable<any> {
        return this._userService.getUserByEmail(control.value)
            .map((user: User): {isFreeEmail: boolean} => {
                if (user) {
                    return {isFreeEmail: true};
                } else {
                    return null;
                }
            });
    }
    /**
     * Проверяет, надежный ли пароль.
     */
    private _isNotSafetyPassword (control: FormControl): {
        [key: string]: boolean;
    } {
        this.passwordScore = zxcvbn(control.value).score;
        if (this.passwordScore < 2) {
            return {isSafetyPassword: true}
        }
        return null;
    }

    ngOnInit() {}
}
