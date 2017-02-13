import {Component} from "@angular/core";
import {Mail, mailsList} from "./mails-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mailsList: Mail[];

  constructor() {
    this.mailsList = mailsList;
  }
}
