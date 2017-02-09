import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'receipt'
})
export class ReceiptPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    let result: string;

    let date: Date = new Date(value);
    let nowDate: Date = new Date();

    let diff: number = nowDate.getTime() - date.getTime();
    
    if ((diff = diff/1000) < 60) {
      result = Math.round(diff) + " секунд назад.";
    }
    else if ((diff = diff/60) < 60) {
      result = Math.round(diff) + " минут назад.";
    }
    else if ((diff = diff/60) < 24) {
      result = Math.round(diff) + " часов назад.";
    }
    else {
      diff = diff/24;
      result = Math.round(diff) + " дней  назад.";
    }

    return result;
  }

}
