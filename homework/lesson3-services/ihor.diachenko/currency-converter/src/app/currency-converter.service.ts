import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyConverterService{
  private apiLink:string = 'http://api.fixer.io/latest';

  constructor(private http: Http) {
  }

  getUnits(): Observable<string[]> {
    return this.http.get(this.apiLink)
        .map(this.extractUnitsData);
  }

  getRate(sourceUnit:string,destinationUnit:string): Observable<number> {
    let queryLink = `${this.apiLink}?base=${sourceUnit}&symbols=${destinationUnit}`;

    return this.http.get(queryLink)
        .map((res: Response) => { let rates = res.json().rates; return rates[destinationUnit];})
  }

  convert(sourceUnit:string, destinationUnit:string, amount:number) {

    return this.getRate(sourceUnit,destinationUnit)
        .map((rate: number) => amount * rate);
  }

  private extractUnitsData(res: Response) {
    let body = res.json();
    let keys: string[] = Object.keys(body.rates);
    keys.push(body.base);
    keys.sort();

    return keys|| [];
  }

}
