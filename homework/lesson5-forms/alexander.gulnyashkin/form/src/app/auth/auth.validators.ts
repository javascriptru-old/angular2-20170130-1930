/**
 * Angular
 */
import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
/**
 * Rxjs
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/**
 * Services
 */
import { SignupService } from './signup/signup.service';
/**
 * Interfaces
 */
import { User } from './user.interface';



@Injectable()
export class AuthValidators {
    public static _signupService;

    constructor (_signupService: SignupService) {
        AuthValidators._signupService = _signupService;
    }

    // public static isFreeEmail (control: FormControl): Observable<any> {
    //     return AuthValidators._signupService.getUserByEmail(control.value) /* FIXME */
    //         .map((user: User) => {
    //             if (user) {
    //                 return {isFreeEmail: false};
    //             } else {
    //                 return null;
    //             }
    //         });
    // }
}
