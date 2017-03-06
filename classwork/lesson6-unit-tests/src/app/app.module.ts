import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { LogClicksDirective } from './log-clicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    LogClicksDirective
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
