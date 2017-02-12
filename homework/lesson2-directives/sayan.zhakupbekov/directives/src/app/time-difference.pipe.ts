import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDifference'
})
export class TimeDifferencePipe implements PipeTransform {

  transform(value: any, args?: any): string {
    const now = new Date().getTime(),
          time = value.getTime(),
          diff = (now - time) / 60000;

    if (diff > 0 && diff < 60) {
      return `${Math.floor(diff)} минут назад`;
    } else if (diff == 60 || diff >= 1230 && diff < 1290) {
      return `${Math.floor(diff / 60)} час назад`;
    } else if (diff > 60 && diff <= 270 || diff > 1290 && diff <= 1470) {
      return `${Math.floor(diff / 60)} часа назад`;
    } else if (diff > 270 && diff <= 1290) {
      return `${Math.floor(diff / 60)} часов назад`;
    } else if (diff > 1470 && diff < 2900) {
      return `${Math.floor(diff / 1440)} день назад`;
    } else if (diff > 2900 && diff < 5840) {
      return `${Math.floor(diff / 1440)} дня назад`;
    } else if (diff > 5880) {
      return 'давным давно';
    }
  }

}
