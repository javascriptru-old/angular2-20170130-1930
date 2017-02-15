import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class CurrencyConverterService {
  private defaultUrl: string = 'http://api.fixer.io/latest';
  private basedOnUrl: string = 'http://api.fixer.io/latest?base=';

  constructor(private _http: Http) {
  }

  getCurrencyNames(): Observable<any> {
    return this._http.get(this.defaultUrl)
      .map(result => Object.keys(result.json().rates));
  }

  convert(srcType: string, destType: string, srcValue: number): Observable<number> {
    return this._http.get(`${this.basedOnUrl}${srcType}`)
      .map(result => srcType !== destType ? +((result.json().rates[destType] * srcValue).toFixed(2)) : srcValue);
  }
}
