import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCard2Component } from './user-card2/user-card2.component';
import { LogClickDirective } from './log-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserCard2Component,
    LogClickDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
