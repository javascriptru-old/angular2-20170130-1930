import { Component, OnInit } from '@angular/core';
import { CurrencyConverterSerivce } from '../currency-converter-serivce.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  providers: [ {provide: CurrencyConverterSerivce, useClass: CurrencyConverterSerivce} ]
})
export class CurrencyConverterComponent implements OnInit {

  public sourceUnit: string;
  public destinationUnit: string;

  constructor(private currencyConverterSerivce: CurrencyConverterSerivce) { }

  ngOnInit() {
  }

  public selectSourceUnit(value: string) {
    this.sourceUnit = value
  }

  public selectDestinationUnit(value: string) {
    this.destinationUnit = value
  }

  public destinationValue(): number {
      return this.currencyConverterSerivce.resultCurrency;
  }

  public getAvailableUnits(): string[] {
    return this.currencyConverterSerivce.availableUnits;
  }
  
  public convert(currency: number){
    if (typeof this.sourceUnit != "string" || this.currencyConverterSerivce.availableUnits.indexOf(this.sourceUnit) == -1) {
      alert("Не корректно указана исходная единица измерения");
    } else if (!currency) {
      alert("Не корректно указано исходное кол-во денежных единиц");
    } else if (typeof this.destinationUnit != "string" || this.currencyConverterSerivce.availableUnits.indexOf(this.destinationUnit) == -1) {
      alert("Не корректно указана желаемая единица измерения");
    } else if (this.sourceUnit == this.destinationUnit) {
      alert("Денежные единицы уже выражены в желаемой валюте");
    } else {
      this.currencyConverterSerivce.convertCurrency(currency, this.sourceUnit, this.destinationUnit);
    }
  }
}
