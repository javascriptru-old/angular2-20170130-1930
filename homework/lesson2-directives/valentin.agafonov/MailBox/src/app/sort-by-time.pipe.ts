import { Pipe, PipeTransform } from '@angular/core';

type somethingWithTime = {
  time: number
};

@Pipe({
  name: 'sortByTime'
})

export class SortByTimePipe implements PipeTransform {

  transform(list: somethingWithTime[], args?: any): somethingWithTime[] {
    const result = [...list];
    result.sort((a, b) => {
      if (a.time > b.time) {
        return -1;
      } else if (a.time < b.time) {
        return 1;
      } else {
        return 0;
      }
    });
    return result;
  }

}
