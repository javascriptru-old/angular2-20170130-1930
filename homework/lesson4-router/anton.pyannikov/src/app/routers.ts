import {UserListResolveService} from "./user-list/user-list-resolve.service";
import {UserCardComponent} from "./user-list/user-card/user-card.component";
import {UserListComponent} from "./user-list/user-list.component";
import {AuthorizationComponent} from "./authorization/authorization.component";
import {CanActivateService} from "./can-activate.service";

export let appRouters = [
  {
    path: '',
    component: AuthorizationComponent
  },
  {
    path: 'users',
    component: UserListComponent,
    resolve: {
      userListResolver: UserListResolveService
    },
    canActivate: [CanActivateService]
  },
  {
    path: 'user/:index',
    component: UserCardComponent,
    resolve: {
      userListResolver: UserListResolveService
    },
    canActivate: [CanActivateService]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
