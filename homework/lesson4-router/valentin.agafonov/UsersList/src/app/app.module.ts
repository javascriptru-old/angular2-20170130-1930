import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { UserInfoService } from './user-info.service';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';

let myAuth = new AuthService();

myAuth.canActivate().subscribe(function (flag) {
  console.log('flag: ', flag);
});

myAuth.tryLogin('test', 'test');

const routes = [
  { 
    path: '', 
    component: HomeComponent,
    canActivate: [AuthService]
  },
  { 
    path: 'user/:userId',
    component: UserComponent,
    resolve: {
      userInfo: UserInfoService
    },
    canActivate: [AuthService]
  },
  {
    path: 'login',
    component: AuthComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    HomeComponent,
    UserComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserInfoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
