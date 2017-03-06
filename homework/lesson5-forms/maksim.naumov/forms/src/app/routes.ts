import { SuccessComponent } from './success/success.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: SignUpFormComponent },
    { path: 'sign-up', component: SignUpFormComponent },
    { path: 'login', component: LogInFormComponent },
    { path: 'success', component: SuccessComponent },
]