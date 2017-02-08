import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateReceipt'
})
export class DateReceiptPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let receiptDate: Date = new Date(Date.parse(value));
    let date: number = new Date().getTime() - receiptDate.getTime();
    let amountTime = {
      min : 60 * 1000,
      hour : 60 * 60 * 1000,
      day : 24 * 60 * 60 * 1000,
      week : 7 * 24 * 60 * 60 * 1000
    };

    if (date < amountTime.min) {
      return `${new Date(date).getSeconds()} seconds ago!`;
    }

    if (date < amountTime.hour) {
      return `${new Date(date).getMinutes()} minutes ago!`;
    }

    if (date < amountTime.day) {
      return `${new Date(date).getHours()} hours ago!`;
    }

    if (date < amountTime.week) {
      let days: number = date/amountTime.day;
      return `${days^0} days ago!`;
    }

    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return receiptDate.toLocaleString("ru", options);
  }

}
