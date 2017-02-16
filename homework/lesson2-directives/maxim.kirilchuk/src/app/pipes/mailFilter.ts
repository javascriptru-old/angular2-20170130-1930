import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailFilter'
})

export class MailFilterPipe implements PipeTransform{
  transform(value: any, args?: any) {
    let result;

    if (!args)
      return value;

    result = value.filter(item => {
      return (
        item.name.toLowerCase().indexOf(args.toLowerCase()) !== -1
        || item.subject.toLowerCase().indexOf(args.toLowerCase()) !== -1
        || item.shortDescription.toLowerCase().indexOf(args.toLowerCase()) !== -1
      )
    });

    return result;

  }
}
