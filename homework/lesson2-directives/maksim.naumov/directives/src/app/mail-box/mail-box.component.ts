import { letters } from './letters';
import { Letter } from './letter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  letters: Letter[];
  date: Date = new Date();
  searchString = "";

  constructor() { }

  // Получение текста фильтра.
  search(filter: string) {
    this.searchString = filter;
  }

  // Получение списка писем.
  ngOnInit() {
    this.letters = letters;
  }

}
