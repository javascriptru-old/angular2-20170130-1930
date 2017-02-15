import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailComponent } from './mail-box/mail/mail.component';
import { DateToDeltaStringPipe } from './date-to-delta-string.pipe';
import { MailFilterComponent } from './mail-box/mail-filter/mail-filter.component';
import { FilterMailsPipe } from './filter-mails.pipe';
import { ArrayNotEmptyPipe } from './array-not-empty.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    MailComponent,
    DateToDeltaStringPipe,
    MailFilterComponent,
    FilterMailsPipe,
    ArrayNotEmptyPipe
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
