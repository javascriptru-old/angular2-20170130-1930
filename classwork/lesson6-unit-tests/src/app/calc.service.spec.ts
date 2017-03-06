import { TestBed, inject } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcService]
    });
  });

  it('should exist', inject([CalcService], (service: CalcService) => {
    expect(service).toBeTruthy();
    expect(service.sum).toBeTruthy();
  }));

  it('should do sum', inject([CalcService], (service: CalcService) => {
    expect(service.sum(3,7)).toBe(10);
    expect(service.sum(-3,7)).toBe(4);
  }));
});
