import { Letter } from './mail-box/letter';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(value: Letter[], filterString: string): Letter[] {    
    
    return value.filter((letter: Letter) => {
      return letter.from.indexOf(filterString) !== -1 || letter.message.indexOf(filterString) !== -1;      
    })
  }

}
