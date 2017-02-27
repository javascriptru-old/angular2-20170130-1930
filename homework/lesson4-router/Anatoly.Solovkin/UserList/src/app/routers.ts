import{ UserListComponent } from "./user-list/user-list.component"
import{ UserCardComponent } from "./user-list/user-card/user-card.component"
import{ LoginComponent } from "./login/login.component"
import { UserResolveService } from './user-list/user-resolve.service';
import { AuthService } from './auth.service';

export const Routers = [
    { 
      path: "", 
      component: LoginComponent
    },
    { 
      path: "users", 
      component: UserListComponent,
      canActivate: [AuthService]
    },
    { 
      path: "user/:id", 
      component: UserCardComponent,
      resolve: {
          users: UserResolveService
      },
      canActivate: [AuthService]
    },
    {
        path: '**',
        redirectTo: ''
    }   
];