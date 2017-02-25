/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserListResolveService } from './user-list-resolve.service';

describe('UserListResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserListResolveService]
    });
  });

  it('should ...', inject([UserListResolveService], (service: UserListResolveService) => {
    expect(service).toBeTruthy();
  }));
});
