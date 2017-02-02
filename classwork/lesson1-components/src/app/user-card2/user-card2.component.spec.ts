/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserCard2Component } from './user-card2.component';

describe('UserCard2Component', () => {
  let component: UserCard2Component;
  let fixture: ComponentFixture<UserCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
