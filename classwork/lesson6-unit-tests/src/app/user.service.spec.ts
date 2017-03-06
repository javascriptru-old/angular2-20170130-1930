import { User } from './user';
import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { XHRBackend, Response, ResponseOptions, HttpModule } from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";

describe('UserService', () => {
  let mockUser: User;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [UserService,
      { provide: XHRBackend, useClass: MockBackend }]
    });

    mockUser = {
      name: 'John',
      age: 21
    };
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should get one user', inject([XHRBackend, UserService], (mockBackend: MockBackend, service: UserService) => {

    mockBackend.connections.subscribe((connection: MockConnection) => {
      let responseOptions = new ResponseOptions({ body: JSON.stringify(mockUser)});
      connection.mockRespond(new Response(responseOptions));
      expect(connection.request.url).toEqual('/users/1');
    });

    service.getOne(1).subscribe( (user: User) => {
      expect(user).toEqual(mockUser);
    });

  }));

  // it('should get all users', inject([UserService], (service: UserService) => {
  //   expect(service).toBeTruthy();
  // }));
});
