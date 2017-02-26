/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarResolveService } from './car-resolve.service';

describe('CarResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarResolveService]
    });
  });

  it('should ...', inject([CarResolveService], (service: CarResolveService) => {
    expect(service).toBeTruthy();
  }));
});
