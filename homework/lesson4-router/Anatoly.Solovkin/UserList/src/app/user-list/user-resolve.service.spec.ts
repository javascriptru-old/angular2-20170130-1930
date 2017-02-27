/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserResolveService } from './user-resolve.service';

describe('UserResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserResolveService]
    });
  });

  it('should ...', inject([UserResolveService], (service: UserResolveService) => {
    expect(service).toBeTruthy();
  }));
});
