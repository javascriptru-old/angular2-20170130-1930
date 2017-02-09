import {Pipe, PipeTransform} from "@angular/core";
import {Mail} from "./mails-list";
import {isUndefined} from "util";

@Pipe({
  name: 'mailFilterBy'
})
export class MailFilterByPipe implements PipeTransform {

  transform(mails: Mail[], args?: any): Mail[] {
    if (isUndefined(args) || args.value === '') {
      return mails;
    }

    let lowerCaseValue: string = args.value.toLowerCase();

    return mails.filter(mail => (args.field in mail) && mail[args.field].toLowerCase().startsWith(lowerCaseValue));
  }
}
