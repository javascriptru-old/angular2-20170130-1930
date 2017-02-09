import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { DateFormatPipe } from  './pipes/dateFormat';
import { MailFilterPipe } from './pipes/mailFilter';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    MailBoxComponent,
    DateFormatPipe,
    MailFilterPipe,
    SearchBoxComponent
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
