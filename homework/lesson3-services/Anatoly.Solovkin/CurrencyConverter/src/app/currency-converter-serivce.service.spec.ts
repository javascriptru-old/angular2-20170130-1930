/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrencyConverterSerivce } from './currency-converter-serivce.service';

describe('CurrencyConverterSerivce', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyConverterSerivce]
    });
  });

  it('should ...', inject([CurrencyConverterSerivce], (service: CurrencyConverterSerivce) => {
    expect(service).toBeTruthy();
  }));
});
