import { Component, OnInit, Input } from '@angular/core';
import {Mail} from "../../mail"

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  @Input() mail: Mail;

  constructor() { }

  ngOnInit() {
  }

}
