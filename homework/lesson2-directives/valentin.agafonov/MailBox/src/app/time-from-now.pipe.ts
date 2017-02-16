import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';


@Pipe({
  name: 'timeFromNow'
})
export class TimeFromNowPipe implements PipeTransform {

  transform(value: number, args?: any): string {

    const now: number = (new Date()).getTime();
    const delta: number = now - value;
    const msg: string = moment.duration(delta).humanize();

    if (delta > 0) {
      return `${msg} ago`;
    } else {
      return `after ${msg}`;
    }

  }

}
