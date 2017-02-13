import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundTo'
})
export class RoundToPipe implements PipeTransform {

    transform(value: number, digitsTo: number): string {
        return value.toFixed(digitsTo);
    }

}
