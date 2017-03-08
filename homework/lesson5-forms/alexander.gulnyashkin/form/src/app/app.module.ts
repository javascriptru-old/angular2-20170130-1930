/**
 * Angular
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
/**
 * Components
 */
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SuccessComponent } from './success/success.component';
/**
 * Services
 */
import { CanActivateService } from './can-activate.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './auth/user.service';
/**
 * Routes
 */
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SuccessComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CanActivateService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
