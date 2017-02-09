import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgoCount'
})
export class TimeAgoCountPipe implements PipeTransform {
  public minute: number = 60 * 1000;
  public hour: number = 60 * this.minute;
  public day: number = 24 * this.hour; 
  public currentTime = Date.now();

  transform(date: number, args?: any): any {
    let deltaTime = this.currentTime - date;
    let formatDeltaTime;
    if ( deltaTime / this.minute < 60) {
      formatDeltaTime = Math.floor(deltaTime / this.minute);
      return `${formatDeltaTime} minute ago` ;
    } else if ( deltaTime / this.hour < 24) {
      formatDeltaTime = Math.floor(deltaTime / this.hour);
      return `${formatDeltaTime} hour ago` ;
    } else {
      formatDeltaTime = Math.floor(deltaTime / this.day);
      return `${formatDeltaTime} day ago` ;
    } 
  }

}
