import { routes } from './routes';
import { UsersService } from './users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { RouterModule } from "@angular/router";
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    LogInFormComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
