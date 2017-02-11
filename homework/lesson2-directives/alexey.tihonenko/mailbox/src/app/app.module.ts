import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { LetterTimePipe } from './mail-box/letter-time.pipe';
import { FilterLettersPipe } from './mail-box/filter-letters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    LetterTimePipe,
    FilterLettersPipe,
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
