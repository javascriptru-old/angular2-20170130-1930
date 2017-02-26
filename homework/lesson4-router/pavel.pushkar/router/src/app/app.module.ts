import { AuthService } from './auth.service';
import { Router, RouterModule, CanActivate } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserCardComponent } from './home/user-list/user-card/user-card.component';
import { UserListComponent } from './home/user-list/user-list.component';
import { AuthComponent } from './auth/auth.component';

import { UserService } from './user.service';
import { UserList } from './userlistservice';
import { AuthGuard } from "./authGuard"

const routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: '', component: HomeComponent},
  { path: 'users', component: UserListComponent,
                   resolve:{users:UserList},
                   canActivate: [AuthGuard]},
  { path: 'users/:userId', component: UserComponent,canActivate: [AuthGuard]},
  { path: 'authorization', component: AuthComponent}
   
];

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserListComponent,
    HomeComponent,
    UserComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [Location, UserListComponent, UserService, UserList, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
