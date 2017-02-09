import { Pipe, PipeTransform } from '@angular/core';
import {Mail} from "../app/mail"

@Pipe({
  name: 'filterMails'
})
export class FilterMailsPipe implements PipeTransform {

  transform(mails: Mail[], searchedValue: string): Mail[] {
    if (mails==undefined) {
      return new Mail[0];
    }
    
    if (typeof searchedValue != "string")
      return mails;
    
    return mails.filter(item => item.emailFrom.toUpperCase().indexOf(searchedValue.toUpperCase())>=0 || 
                                item.subject.toUpperCase().indexOf(searchedValue.toUpperCase())>=0);
  }
}
