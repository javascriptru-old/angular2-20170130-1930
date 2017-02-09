import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { DateTimeFormattingPipe } from './date-time-formatting.pipe';
import { MailFilterByPipe } from './mail-filter-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    DateTimeFormattingPipe,
    MailFilterByPipe,
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
