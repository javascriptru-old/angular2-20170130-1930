import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { FilterPipe } from './filter.pipe';
import { FormatTimePipe } from './format-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    FilterPipe,
    FormatTimePipe
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
