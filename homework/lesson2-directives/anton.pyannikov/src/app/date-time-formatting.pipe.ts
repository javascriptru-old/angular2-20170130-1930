import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'dateTimeFormatting'
})


export class DateTimeFormattingPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    interface TimeUnit {
      value: number,
      description: string
    }

    let srcDateTime: Date = new Date(value);
    let nowDateTime: number = Date.now();
    let diff: number = nowDateTime - +srcDateTime;

    let timeUnits: TimeUnit[] = [];

    timeUnits.push({
      value: 1000, description: 'сек.'
    });
    timeUnits.push({
      value: timeUnits[timeUnits.length - 1].value * 60, description: 'мин.'
    });
    timeUnits.push({
      value: timeUnits[timeUnits.length - 1].value * 60, description: 'ч.'
    });
    timeUnits.push({
      value: timeUnits[timeUnits.length - 1].value * 24, description: 'дн.'
    });
    timeUnits.push({
      value: timeUnits[timeUnits.length - 1].value * 7, description: 'нед.'
    });

    let tmp: number;

    for (let i = timeUnits.length - 1; i > -1; --i) {
      if (tmp = ~~(diff / timeUnits[i].value)) {
        return `${tmp} ${timeUnits[i].description} назад`;
      }
    }

    return `${diff} мс. назад`;
  }
}
