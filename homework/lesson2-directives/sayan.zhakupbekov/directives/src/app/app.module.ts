import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { TimeDifferencePipe } from './time-difference.pipe';
import { HighlightMessagePipe } from './highlight-message.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    TimeDifferencePipe,
    HighlightMessagePipe
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
