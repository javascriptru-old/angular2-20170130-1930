import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSubstring'
})
export class SearchSubstringPipe implements PipeTransform {

  transform(letters, substr: string): any {
    let lowerSubstr = substr.toLowerCase();
  
    console.log(lowerSubstr);
    
    function searchSubsr(letter){
      if(~letter["sender"].toLowerCase().indexOf(lowerSubstr)){
        return true;
      }
    }

    return letters.filter(searchSubsr);
  }
}