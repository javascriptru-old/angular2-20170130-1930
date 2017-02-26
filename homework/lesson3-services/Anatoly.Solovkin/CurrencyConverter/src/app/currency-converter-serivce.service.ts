import { Injectable } from '@angular/core';

declare function fetch(url: string): PromiseLike<any>;

@Injectable()
export class CurrencyConverterSerivce {

  public resultCurrency: number = undefined;
  public resultUnit: string = undefined;

  public availableUnits: string[] = [
        "AUD",
        "BGN",
        "BRL",
        "CAD",
        "CHF",
        "CNY",
        "CZK",
        "DKK",
        "GBP",
        "HKD",
        "HRK",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "JPY",
        "KRW",
        "MXN",
        "MYR",
        "NOK",
        "NZD",
        "PHP",
        "PLN",
        "RON",
        "RUB",
        "SEK",
        "SGD",
        "THB",
        "TRY",
        "USD",
        "ZAR"
  ];

  constructor() { }

  public convertCurrency(currency: number, sourceUnit: string, destinationUnit: string) {
    this.resultCurrency = undefined;
    this.resultUnit = undefined;

    if (currency &&
        typeof sourceUnit == "string" && this.availableUnits.indexOf(sourceUnit.toUpperCase()) >=0 &&
        typeof destinationUnit == "string" && this.availableUnits.indexOf(destinationUnit.toUpperCase()) >=0) {

          fetch(`http://api.fixer.io/latest?base=${sourceUnit}&symbols=${destinationUnit}`)
                  .then(responce => responce.json())
                  .then(data => {
                    this.resultCurrency = currency * data.rates[destinationUnit.toUpperCase()];
                    this.resultUnit = destinationUnit;
                  });
        }
  }
}
