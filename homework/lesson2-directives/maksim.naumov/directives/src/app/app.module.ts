import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { ReceiptPipe } from './receipt.pipe';
import { TextFilterPipe } from './text-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    ReceiptPipe,
    TextFilterPipe
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
