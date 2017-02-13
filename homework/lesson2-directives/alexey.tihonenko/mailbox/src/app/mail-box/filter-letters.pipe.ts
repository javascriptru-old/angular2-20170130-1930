import { Pipe, PipeTransform } from '@angular/core';

import {Letter} from "./letter";

@Pipe({
  name: 'filterLetters'
})
export class FilterLettersPipe implements PipeTransform {

  transform(letters:Letter[], query: string): Letter[] {
    query = query.toLowerCase();
    
    return letters.filter((letter) => {
      let title:string = letter.title.toLowerCase();
      let text:string = letter.text.toLowerCase();
      let result:boolean = false;

      if(title.indexOf(query) != -1 || text.indexOf(query) != -1) {
        result = true;
      }

      return result;
    });
  }
}
