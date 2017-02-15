import {Component, OnInit} from '@angular/core';
import {CurrencyConverterService} from "../currency-converter.service";

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  providers: [CurrencyConverterService]
})
export class CurrencyConverterComponent implements OnInit {
  currencyNames: string[] = null;
  conversionResult: number = null;

  constructor(private _currencyConverter: CurrencyConverterService) {
  }

  refreshCurrencyNames(): void {
    this.currencyNames = null;

    this._currencyConverter.getCurrencyNames()
      .subscribe(
        result => this.currencyNames = result,
        error => console.log(error)
      );
  }


  convertCurrency(srcType: string, destType: string, srcValue: number) {
    this.conversionResult = null;

    this._currencyConverter.convert(srcType, destType, srcValue)
      .subscribe(
        result => this.conversionResult = result,
        error => console.log(error)
      );
  }

  ngOnInit() {
  }
}
