import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from './currency-converter.service';
import { CurrencyConverter } from './currency-converter.interface';

@Component({
    selector: 'app-currency-converter',
    templateUrl: './currency-converter.component.html',
    styleUrls: ['./currency-converter.component.css'],
    providers: [CurrencyConverterService]
})
export class CurrencyConverterComponent implements OnInit {
    public rates: Array<CurrencyConverter>;
    public currPair: string;
    public result: string;
    public textInInput: string;

    constructor(private _currencyConverterService: CurrencyConverterService) {
        this.rates = [];
        this._currencyConverterService.getCurrency()
            .subscribe(res => {
                this.rates = res;
                this.currPair = this.rates[0].name;
            })
    }
    /**
     * Меняет пару валют
     */
    changeCurrency (pair: string): void {
        this.currPair = pair;
        this.convertCurrency(this.textInInput);
    }
    /**
     * Конвертирует валюту
     */
    convertCurrency (value: string): void {
        this.result = this._currencyConverterService.convert(this.currPair, value);
        this.textInInput = value;
    }

    ngOnInit() {}
}
