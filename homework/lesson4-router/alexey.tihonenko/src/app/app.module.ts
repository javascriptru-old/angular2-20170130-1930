import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LoginComponent } from './login/login.component';

const routes = [
  {path: '',
   component: UserListComponent,
   resolve: {
    users: UsersService
  }},
  {path: 'user/:userId',
   component: UserInfoComponent,
   canActivate: [AuthService],
   resolve: {
     user: UserService
   }},
   {path: 'login',
    component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserInfoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, UsersService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
