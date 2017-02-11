import { Pipe, PipeTransform } from '@angular/core';
import { Email } from "./common";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(emails: Email[], filterValue: string): Email[] {
        debugger;
          if (emails == undefined) {
              return new Email[0];
          }

          if (typeof filterValue != "string")
              return emails;

          return emails.filter(item => item._from.toUpperCase().indexOf(filterValue.toUpperCase()) >= 0 ||
              item._to.toUpperCase().indexOf(filterValue.toUpperCase()) >= 0 ||
              item.theme.toUpperCase().indexOf(filterValue.toUpperCase()) >= 0 ||
              item.text.toUpperCase().indexOf(filterValue.toUpperCase()) >= 0);
    }

}
