import { Pipe, PipeTransform } from '@angular/core';

import { letter } from './mail-box/mail-box.component';

@Pipe({
  name: 'filterBySubstr'
})
export class FilterBySubstrPipe implements PipeTransform {

  transform(list: letter[], substr?: string): letter[] {
    let result = [...list];
    if (substr) {
      result = result.filter(item => this.checkLetterBySubstr(item, substr));
    }
    return result;
  }

  private checkLetterBySubstr(letter: letter, substr: string) {

    const substrUppercase = substr.toUpperCase();
    const titleUppercase = letter.title.toUpperCase();
    const fromUppercase = letter.from.toUpperCase();

    return (
      titleUppercase.indexOf(substrUppercase) !== -1 ||
      fromUppercase.indexOf(substrUppercase) !== -1
    );

  }

}
