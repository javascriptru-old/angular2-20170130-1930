import { Component, OnInit } from '@angular/core';

import {Letter} from "./letter";

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
  private letters: Letter[] = require('./letters.json');
  private messageMapping = {
    '=0': 'часов', 
    '=1': 'час', 
    '=2': 'часа',
    '=3': 'часа',
    '=4': 'часа',
    '=5': 'часов', 
    'other': 'часов'};

  private query:string = "";
  private setQuery(str:string):void {
    this.query = str;
  }
  
  constructor() {
  }

  ngOnInit() {
  }

}
