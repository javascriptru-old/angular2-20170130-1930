import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hex'
})
export class StringnumberPipe implements PipeTransform {

  transform(value: string, args?: any): number {
    return +value;
  }

}
