import { Component, OnInit } from '@angular/core';
import mailsJSON  from "../../mails";
import {Mail} from "../mail"

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  public mails: Mail[]; 
  public searchedValue: string = "";
  
  constructor() { }

  ngOnInit() {
    if (mailsJSON instanceof Array) {
      this.mails = mailsJSON.map(obj => new Mail(obj));
    }
  }
}
