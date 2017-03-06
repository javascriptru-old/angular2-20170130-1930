import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {

  constructor() { }

  sum(a: number, b:number): number {
    return a + b;
  }
}
