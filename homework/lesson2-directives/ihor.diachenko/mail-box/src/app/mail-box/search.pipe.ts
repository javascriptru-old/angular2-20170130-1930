import { Pipe, PipeTransform } from '@angular/core';
import {Letter} from "./letter";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(letters: Letter[], search: string): Letter[] {
    let searchLow = search.toLowerCase();

    return letters.filter(searchFilter);

    function searchFilter(letter:Letter) {
      let inAuthor:boolean = letter.author.toLowerCase().indexOf(searchLow) !== -1;
      let inMessage:boolean = letter.message.toLowerCase().indexOf(searchLow) !== -1;

      return (inAuthor || inMessage);
    }

  }

}
