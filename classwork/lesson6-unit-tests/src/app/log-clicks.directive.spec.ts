import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LogClicksDirective } from './log-clicks.directive';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'container',
  template: '<div appLogClicks (changes)="changed($event)"></div>'
})
export class Container {
  @Output() changes = new EventEmitter();
  changed(value) {
    this.changes.emit(value);
  }
}


describe('LogClicksDirective', () => {
  let fixture, element, container;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Container, LogClicksDirective]
    });

    fixture = TestBed.createComponent(Container);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should output clicks', fakeAsync(() => {
    let div = element.querySelector('div');
    container.changes.subscribe(count => {
      expect(count).toBe(1);
    });
    div.click();
    tick();
  }));



});
