/**
 * Components
 */
import { AuthComponent } from './auth/auth.component';
import { SuccessComponent } from './success/success.component';
/**
 * Services
 */
import { CanActivateService } from './can-activate.service';
/**
 * Routes
 */
import { authRoutes } from './auth/auth.routes';

export let appRoutes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: authRoutes
    },
    {
        path: 'success',
        component: SuccessComponent,
        canActivate: [CanActivateService]
    },
    {
        path: '**',
        redirectTo: 'success'
    }
];
