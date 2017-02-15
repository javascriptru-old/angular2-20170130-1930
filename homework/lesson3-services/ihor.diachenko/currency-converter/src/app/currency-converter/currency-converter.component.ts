import { Component, OnInit } from '@angular/core';
import {CurrencyConverterService} from "../currency-converter.service";

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  public units:string[];
  public sourceUnit:string;
  public destinationUnit:string;

  public result:number;

  constructor(private converterService: CurrencyConverterService){
  }

  ngOnInit() {
    this.getUnits();
  }

  setSourceUnit(value) {
    this.sourceUnit = value;
  }

  setDestinationUnit(value) {
    this.destinationUnit = value;
  }

  convert(amount:number) {

    if(!this.sourceUnit||!this.destinationUnit) {
      alert("Wrong Data");
      return;
    }

    this.converterService.convert(this.sourceUnit,this.destinationUnit,amount)
        .subscribe((value)=>{this.result = value;})

  }

  getUnits() {
    this.converterService.getUnits().subscribe(
        (units) => {this.units = units})
  }
}
