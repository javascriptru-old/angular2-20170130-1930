import { HttpModule } from '@angular/http';
import { UserService } from './../user.service';
import { Observable } from 'rxjs/Observable';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import 'rxjs/add/observable/of'

describe('UserCardComponent', () => {
  let mockUser;;
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let spy: jasmine.Spy;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ UserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockUser = {
      name: 'John',
      age: 21
    };
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = fixture.debugElement.injector.get(UserService);
    spy = spyOn(userService, 'getOne').and.returnValue(Observable.of(mockUser));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call UserService.getOne', () => {
    component.someMethod();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should set user', () => {
    component.someMethod();
    expect(component.user).toEqual(mockUser);
  });
});
