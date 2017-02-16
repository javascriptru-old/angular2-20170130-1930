import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExchangeService {
    private BaseCurrency = "RUB";
    private currRates: any;

    supportedCurrencies = ['USD', 'GBP', 'EUR', 'RUB'];

    constructor(private _http: Http) {
    }

    getExchangeRate(baseCurrency: string, targetCurrency: string): number {
        if (baseCurrency != this.BaseCurrency) {
            this.BaseCurrency = baseCurrency;
            this.getRates(this.BaseCurrency);
        }
        if (baseCurrency === targetCurrency) return 1;
        return (this.currRates) ? this.currRates[targetCurrency] : 1;
    }

    getRates(bc: string)
    {
        return this._http.get('http://api.fixer.io/latest?base=' + bc)
        .map(data => JSON.parse(data._body).rates);
    }
}