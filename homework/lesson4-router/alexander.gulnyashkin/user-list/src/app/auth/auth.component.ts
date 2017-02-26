import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    public isError: boolean;

    constructor (private _authService: AuthService) {}

    onAuth (login: string, password: string): void {
        if (!this._authService.logIn(login, password)) {
            this.isError = true;
            setTimeout(() => {
                this.isError = false;
            }, 3000);
        }
    }

    ngOnInit() {}
}
