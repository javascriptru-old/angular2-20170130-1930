import { Component, OnInit, Input } from '@angular/core';

export interface Mail {
  sender: string,
  theme: string,
  preview: string,
  date: any
}

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  @Input('mails') mails;
  @Input('filterValue') filterValue;

  constructor() { }

  ngOnInit() {
  }

}
