import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { TimeFromNowPipe } from './time-from-now.pipe';
import { SortByTimePipe } from './sort-by-time.pipe';
import { FilterBySubstrPipe } from './filter-by-substr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    MailBoxComponent,
    TimeFromNowPipe,
    SortByTimePipe,
    FilterBySubstrPipe
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
