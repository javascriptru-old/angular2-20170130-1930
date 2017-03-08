/**
 * Angular
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Services
 */
import { AuthService } from './../auth/auth.service';


@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

    constructor(private _authService: AuthService,
        private _router: Router) {}

    /**
     * Выход из учетной записи.
     */
    public logout (): void {
        this._authService.logout();
        this._router.navigateByUrl('/auth');
    }

    ngOnInit() {}
}
