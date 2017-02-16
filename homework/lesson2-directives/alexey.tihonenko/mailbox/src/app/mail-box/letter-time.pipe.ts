import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterTime'
})
export class LetterTimePipe implements PipeTransform {

  transform(value: number): number {
    let letterDate:Date = new Date(value);
    let now:Date = new Date();
    let msDiff:number = +now - +letterDate;
    let hoursDiff:number = Math.floor(msDiff / 1000 / 60 / 60);
    return hoursDiff;
  }

}
