import { Pipe, PipeTransform } from '@angular/core';
import {isNumber} from "util";

@Pipe({
  name: 'dateFormat'
})

export class DateFormatPipe implements PipeTransform {
  transform(value: any, args?: any) {
    let result: Date;
    if (isNumber(value)) {
      result = new Date(value)
    }
    return result;
  }

}
