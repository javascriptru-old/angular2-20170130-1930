/**
 * Angular
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * Services
 */
import { AuthService } from './../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public error: boolean = false;

    constructor(private _formBuilder: FormBuilder,
        private _authService: AuthService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute) {
        this.loginForm = this._createForm();
    }

    /**
     * Проверяет верны ли входные данные и,
     * если верны, то делает редирект, иначе
     * выводит ошибку.
     */
    public login (email: string, password: string): void {
        this._authService.login(email, password)
            .subscribe((response: boolean): void => {
                if (response === true) {
                    this._router.navigate(['/'], {relativeTo: this._activatedRoute});
                } else {
                    this.error = true;
                }
            });
    }
    /**
     * Событие ввода. Убирает сигнал об ошибке.
     */
    public input (): void {
        this.error = false;
    }
    /**
     * Создает модель формы.
     */
    private _createForm (): FormGroup {
        return this._formBuilder.group({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {}
}
