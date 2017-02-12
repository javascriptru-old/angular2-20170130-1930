import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../currency-exchange.service';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrls: ['./currency-convert.component.css']
})
export class CurrencyConvertComponent implements OnInit {
    baseAmount: number = 1;
    baseCurrency: string = 'USD';
    targetCurrency: string = 'RUB';

    constructor(private exchangeService: ExchangeService) { }

    get targetAmount() {
        return this.baseAmount * this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency);
    }

    ngOnInit() {
    }

}
