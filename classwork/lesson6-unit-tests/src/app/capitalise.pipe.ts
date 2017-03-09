import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalise'
})
export class CapitalisePipe implements PipeTransform {

  transform(value: string): string {
    if(isString(value)){
      return value.toUpperCase();
    }
    throw new Error('Should be string!');
  }

}

const isString = (str) => typeof str === 'string' || str instanceof String;