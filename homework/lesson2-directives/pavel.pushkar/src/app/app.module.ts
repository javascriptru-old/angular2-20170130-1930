import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { TimeAgoCountPipe } from './mail-box/time-ago-count.pipe';
import { SearchSubstringPipe } from './mail-box/search-substring.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    TimeAgoCountPipe,
    SearchSubstringPipe
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
