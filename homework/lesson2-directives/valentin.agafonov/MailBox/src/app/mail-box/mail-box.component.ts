import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mail-box',
  templateUrl: './mail-box.component.html',
  styles: []
})
export class MailBoxComponent implements OnInit {

  @Input() letters: letter[];

  constructor() {}

  ngOnInit() {}

}

export type letter = {
  from: string,
  title: string,
  time: number
};
