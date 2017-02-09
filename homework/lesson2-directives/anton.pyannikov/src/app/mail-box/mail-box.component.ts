import {Component, OnInit, Input} from "@angular/core";
import {Mail} from "../mails-list";

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
  @Input('mails-list') mailsList: Mail[];

  public searchValue: string = '';
  public selectedMail: Mail;

  constructor() {
  }

  ngOnInit() {
  }

}
