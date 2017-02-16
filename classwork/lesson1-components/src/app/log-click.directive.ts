import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogClick]'
})
export class LogClickDirective {

  private _counter = 0;

  @HostBinding('class') isRed = true;

  @HostListener('click') log(event) {
    this._counter++;
    console.log(this._counter);
  }

  constructor() { }

}
