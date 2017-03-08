/**
 * Components
 */
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export let authRoutes = [
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
