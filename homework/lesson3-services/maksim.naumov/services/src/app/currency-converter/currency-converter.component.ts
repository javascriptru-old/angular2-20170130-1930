import { CurrencyConverterService } from './currency-converter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  providers: [CurrencyConverterService]
})
export class CurrencyConverterComponent implements OnInit {

  constructor(private _converterService: CurrencyConverterService) {

  }

  private result:number = 0;
  private from:string = "";
  private to:string = "";
  private count: number = 0;

  ngOnInit() {
    
  }

  calculate() {
    this._converterService.convert(this.from, this.to, this.count)
    .subscribe(result =>{
      this.result = result;
    })    
  }

}
