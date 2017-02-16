import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExchangeService } from '../currency-exchange.service';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.css']
})
export class CurrencySelectComponent {
    @Input() selected: string;
    @Output() selectedChange = new EventEmitter<string>();

    private supportedCurrencies: string[];

    constructor(private exchangeService: ExchangeService) {
        this.supportedCurrencies = exchangeService.supportedCurrencies;
    }

    onSelect(selected) {
        this.selected = selected;
        this.selectedChange.emit(selected);
    }

    //ngOnInit() {
    //}

}
