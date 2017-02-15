import { Pipe, PipeTransform } from '@angular/core';
import {Mail} from './mail-box/mail-box.component'

@Pipe({
  name: 'highlightMessage'
})

export class HighlightMessagePipe implements PipeTransform {

  transform(mails: Array<Mail>, filterValue: string): Array<Mail> {
    if(filterValue === '') {
      return mails;
    }
    return mails.filter((mail: Mail) => {
      let flag = false;

      if (mail.sender.toLowerCase().includes(filterValue.toLowerCase())) {
        flag = true;
      }
      if (mail.theme.toLowerCase().includes(filterValue.toLowerCase())) {
        flag = true;
      }
      if (mail.preview.toLowerCase().includes(filterValue.toLowerCase())) {
        flag = true;
      }
      return flag;
    });
  }

}
