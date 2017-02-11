import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToDeltaString'
})
export class DateToDeltaStringPipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    var resultPsrts: string[] = [];

    var duration = Math.round(((new Date()).getTime() - value.getTime()) / 1000);

    var years = Math.trunc(duration/60/60/24/365);
    if (years>0) {
      resultPsrts.push(years.toString()+" "+this.getUnit(years, "год", "года", "лет", "лет"));
    }

    duration = duration -years*365*24*60*60;

    var months = Math.trunc(duration/60/60/24/30);
    if (months>0) {
      resultPsrts.push(months.toString()+" "+this.getUnit(months, "месяц", "месяца", "месяцев", "месцев"));
    }

    duration = duration  - months*30*24*60*60;

    var days = Math.trunc(duration/60/60/24);
    if (days>0) {
      resultPsrts.push(days.toString()+" "+this.getUnit(days, "день", "дня", "дней", "дней"));
    }

    duration = duration - days*24*60*60;

    var hours = Math.trunc(duration/60/60);
    if (hours>0) {
      resultPsrts.push(hours.toString()+" "+this.getUnit(hours, "час", "часа", "часов", "часов"));
    }

    duration = duration- hours*60*60;

    var minutes = Math.trunc(duration/60);
    if (minutes>0) {
      resultPsrts.push(minutes.toString()+" "+this.getUnit(minutes, "минуту", "минуты", "минут", "минут"));
    }

    return resultPsrts.length>0
      ? resultPsrts.join(", ")+" назад"
      : "только что";
  }

  private getUnit(value: number, text_1: string, text_2_4: string, text_11_14: string, text_other: string): string
  {
    value = Math.trunc(value);
    
    var valStr: string = value.toString();

    if (valStr.length<2) {
      valStr="0"+valStr;
    } else {
      valStr=valStr.substr(valStr.length-2, 2);
    }

    if (valStr=="11" || valStr=="12" || valStr=="13" || valStr=="14") {
      return text_11_14;
    } else if (valStr.substr(1, 1)=="1") {
      return text_1;
    } else if (valStr.substr(1, 1)=='2' || valStr.substr(1, 1)=='3' || valStr.substr(1, 1)=='4') {
      return text_2_4;
    } else {
      return text_other
    }
  }



}
