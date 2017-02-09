import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DateReceiptPipe } from './date-receipt.pipe';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { SortBySearchPipe } from './sort-by-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateReceiptPipe,
    MailBoxComponent,
    SortBySearchPipe
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
