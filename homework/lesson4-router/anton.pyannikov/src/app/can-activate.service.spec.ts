/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanActivateService } from './can-activate.service';

describe('CanActivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateService]
    });
  });

  it('should ...', inject([CanActivateService], (service: CanActivateService) => {
    expect(service).toBeTruthy();
  }));
});
