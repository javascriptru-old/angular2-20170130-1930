import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateReceipt'
})
export class DateReceiptPipe implements PipeTransform {

  transform(value: string, dateFormat: string = "default"): string {
    let receiptDate: Date = new Date(Date.parse(value));
    let time: number = new Date().getTime() - receiptDate.getTime();
    let amountTime = {
      sec: 1000,
      min : 60 * 1000,
      hour : 60 * 60 * 1000,
      day : 24 * 60 * 60 * 1000,
      week : 7 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000,
      year: 365 * 24 * 60 * 60 * 1000
    };
    if (dateFormat === "auto") {
      let getDateFormat = () => {
        if (time < amountTime.min) {
          return "seconds";
        }

        if (time < amountTime.hour) {
          return "minutes";
        }

        if (time < amountTime.day) {
          return "hours";
        }

        if (time < amountTime.week) {
          return "days";
        }
        return "default";
      }
      dateFormat = getDateFormat();
    }
      switch (dateFormat) {
        case "seconds" : {
          if (time >  amountTime.sec) {
            let seconds: number = time/amountTime.sec;
            return `${seconds} seconds ago!`;
          }
          return "0 seconds ago!";
        }
        case "minutes" : {
          if (time >  amountTime.min){
            let minutes: number = time/amountTime.min;
            return `${minutes^0} minutes ago!`;
          }
          return "0 minutes ago!";
        }
        case "hours" : {
          if (time >  amountTime.hour){
            let hours: number = time/amountTime.hour;
            return `${hours^0} days ago!`;
          }
          return "0 days ago!";
        }
        case "days" : {
          if (time >  amountTime.day){
            let days: number = time/amountTime.day;
            return `${days^0} days ago!`;
          }
         return "0 days ago!"
        }
        case "weeks" : {
          if (time >  amountTime.week){
            let weeks: number = time/amountTime.week;
            return `${weeks^0} weeks ago!`;
          }
          return "0 weeks ago!"
        }
        case "months" : {
          if (time >  amountTime.month){
            let months: number = time/amountTime.month;
            return `${months^0} months ago!`;
          }
          return "0 months ago!"
        }
        case "years" : {
          if (time >  amountTime.month){
            let year: number = time/amountTime.year;
            return `${year^0} years ago!`;
          }
          return "0 years ago!"
        }
        default : {
          var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          };
          return receiptDate.toLocaleString("ru", options);
        }
      }
  }
}
