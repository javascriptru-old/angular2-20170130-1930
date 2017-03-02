import { Directive } from '@angular/core';

@Directive({
  selector: '[console]',
  exportAs: 'xxx'
})
export class ConsoleDirective {
  constructor() { }

  log(...args) {
    console.log(args);
  }

}
