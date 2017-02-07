import { Component, OnInit } from '@angular/core';
import {Letter} from "./letter";
import {letters} from "./letters";


@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html'
})
export class MailBoxComponent implements OnInit {
  letters:Letter[] = letters;

  constructor() { }

  ngOnInit() {
  }

}
