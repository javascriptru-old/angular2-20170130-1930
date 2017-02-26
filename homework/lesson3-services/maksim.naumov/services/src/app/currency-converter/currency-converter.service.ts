import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrencyConverterService {

  constructor(private _http: Http) { }

  tmp: Object;

  private getRate(base: string, target: string): Observable<any> {
    return this._http.get(`http://api.fixer.io//latest?base=${base}&symbols=${target}`)
    .map(data => data.json().rates[target])
  }

  convert(from: string, to: string, count: number): Observable<any> {
    let res: number = 0;

    return this.getRate(from, to)
    .map(rate => rate * count);
  }

}
