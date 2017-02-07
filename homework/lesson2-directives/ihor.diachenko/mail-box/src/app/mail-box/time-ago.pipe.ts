import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  private ONE_MIN:number = 60 * 1000;
  private ONE_HOUR:number = this.ONE_MIN * 60;
  private ONE_DAY:number = this.ONE_HOUR * 24;
  private CURRENT_DATE:number = new Date().getTime();

  transform(date: number, args?: any): string {
    let subtractionDate = this.CURRENT_DATE - date;

    if (subtractionDate < this.ONE_HOUR) {
      let minutes = subtractionDate/this.ONE_MIN,
          floor_minutes = Math.floor(minutes);

      return `${floor_minutes} minutes ago`;
     //
    } else if (subtractionDate < this.ONE_DAY) {
      let hours = subtractionDate/this.ONE_HOUR,
          floor_hours = Math.floor(hours);

      return `${floor_hours} hours ago`;
      //
    } else {
      let days = subtractionDate/this.ONE_DAY,
          floor_days = Math.floor(days);

      return `${floor_days} days ago`;
    }


  }

}
