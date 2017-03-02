import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from '../app/user-service.service';
import { AuthService } from '../app/auth.service';
import{ UserListComponent } from "./user-list/user-list.component"
import{ UserCardComponent } from "./user-list/user-card/user-card.component"
import { RouterModule } from "@angular/router"
import { routes } from "./routers";
import { UserResolveService } from './user-list/user-resolve.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: UserService, useClass: UserService},
    {provide: AuthService, useClass: AuthService},
    UserResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
