import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CurrencyConverter } from './currency-converter.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyConverterService {
    private _rates: Array<CurrencyConverter>;

    constructor(private _http: Http) {}

    /**
     * Запрашивает данные с сервера.
     */
    private _requestCurrency (): Observable<any> {
        return this._http.get(`https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22USDRUB,EURRUB,USDEUR%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
    }
    /**
     * Трансформирует данные.
     */
    public getCurrency (): Observable<any> {
            return this._requestCurrency()
            .map(res => {
                this._rates = res.json().query.results.rate.map(item => {
                    return {
                        name: item.Name,
                        rate: item.Rate
                    }
                });
                this._rates.forEach(item => {
                    this._rates.push({
                        name: item.name.split('/').reverse().join('/'),
                        rate: '' + (1 / +item.rate)
                    });
                });
                return this._rates;
            });
    }

    /**
     * Конвертирует валюту.
     */
    public convert (pair: string, value: string): string {
        if (!value) return '';
        return (+value * +this._rates.find(item => {
            return item.name === pair;
        }).rate).toFixed(2);
    }
}
