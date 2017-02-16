import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailFilter'
})

export class MailFilterPipe implements PipeTransform{
  transform(value: any, args?: any) {
    if (value === undefined) {
      return value;
    }

    debugger;
  }
}
