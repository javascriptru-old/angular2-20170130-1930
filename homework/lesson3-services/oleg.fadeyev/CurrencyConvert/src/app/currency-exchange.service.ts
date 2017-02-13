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
        let o = this._http.get('http://api.fixer.io/latest?base=' + bc);        
        o.subscribe((data: any) => {
            this.currRates = JSON.parse(data._body).rates;
        });      
    }
}