import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
  protected mailsList: Array<Object>;
  public filter: String;
  constructor() {
    this.mailsList = [
    {
      name: 'Tomas Anders',
      fromName: 'Mark Otto',
      subject: 'Nice work',
      shortDescription: "More content ... 2",
      date: 1486539929928,
      attachment: true,
      isFavorite: false
    }, {
      name: 'John Smith',
      fromName: 'Mark Otto 2',
      subject: 'Niice work 2',
      shortDescription: "More content ...",
      date: 1486539139928,
      attachment: false,
      isFavorite: false
    }];
  }

  ngOnInit() {



  }

}
