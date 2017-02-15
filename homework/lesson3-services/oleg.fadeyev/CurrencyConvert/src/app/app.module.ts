import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';
import { CurrencySelectComponent } from './currency-select/currency-select.component';
import { ExchangeService } from './currency-exchange.service';
import { RoundToPipe } from './round-to.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConvertComponent,
    CurrencySelectComponent,
    RoundToPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
