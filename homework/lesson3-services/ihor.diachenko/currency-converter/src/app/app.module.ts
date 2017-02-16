import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CurrencyConverterService} from "./currency-converter.service";
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { ConverterSelectComponent } from './currency-converter/converter-select/converter-select.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    ConverterSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CurrencyConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
