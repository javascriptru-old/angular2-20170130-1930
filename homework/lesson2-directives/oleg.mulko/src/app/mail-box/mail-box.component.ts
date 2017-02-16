import { Component, OnInit, Input } from '@angular/core';
import {letters} from "../letters";

@Component({
  selector: 'mailBox',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  @Input() letters: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  getLetters(): any {
    return letters;
  }

}
