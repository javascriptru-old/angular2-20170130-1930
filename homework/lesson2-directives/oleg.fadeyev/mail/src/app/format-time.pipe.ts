import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {


    transform(value: string, args?: any): string {
        var dateval = new Date(value);
        var dateStrs: string[] = [];

        var dateInterval = Math.round(((new Date()).getTime() - dateval.getTime()) / 1000);

        var years = Math.trunc(dateInterval / 60 / 60 / 24 / 365);
        if (years > 0) {
            dateStrs.push(years.toString() + " " + this.getUnit(years, "год", "года", "лет", "лет"));
        } else {
            dateInterval = dateInterval - years * 365 * 24 * 60 * 60;

            var months = Math.trunc(dateInterval / 60 / 60 / 24 / 30);
            if (months > 0) {
                dateStrs.push(months.toString() + " " + this.getUnit(months, "месяц", "месяца", "месяцев", "месяцев"));
            } else {
                dateInterval = dateInterval - months * 30 * 24 * 60 * 60;

                var days = Math.trunc(dateInterval / 60 / 60 / 24);
                if (days > 0) {
                    dateStrs.push(days.toString() + " " + this.getUnit(days, "день", "дня", "дней", "дней"));
                } else {

                    dateInterval = dateInterval - days * 24 * 60 * 60;

                    var hours = Math.trunc(dateInterval / 60 / 60);
                    if (hours > 0) {
                        dateStrs.push(hours.toString() + " " + this.getUnit(hours, "час", "часа", "часов", "часов"));
                    } else {
                        dateStrs.push("меньше часа");
                    }
                }
            }
        }
        return dateStrs.join(" ") + " назад";            
    }

    private getUnit(value: number, text_1: string, text_2_4: string, text_11_14: string, text_other: string): string {
        value = Math.trunc(value);

        var valStr: string = value.toString();

        if (valStr.length < 2) {
            valStr = "0" + valStr;
        } else {
            valStr = valStr.substr(valStr.length - 2, 2);
        }

        if (valStr == "11" || valStr == "12" || valStr == "13" || valStr == "14") {
            return text_11_14;
        } else if (valStr.substr(1, 1) == "1") {
            return text_1;
        } else if (valStr.substr(1, 1) == '2' || valStr.substr(1, 1) == '3' || valStr.substr(1, 1) == '4') {
            return text_2_4;
        } else {
            return text_other
        }
    }



}