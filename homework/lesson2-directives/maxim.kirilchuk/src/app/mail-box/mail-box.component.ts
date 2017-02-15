import { Component, OnInit, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
  protected mailsList: Array<Object>;
  public searchValue: String;

  constructor() {
    this.mailsList = [
      {
        "id": "589c2b804eb76776a0f80899",
        "fullName": "Leon Alford",
        "email": "leonalford@evidends.com",
        "subject": "proident qui ut irure adipisicing",
        "shortDescription": "veniam laborum excepteur mollit irure aliqua exercitation anim sunt laborum",
        "isFavorite": false,
        "date": "2016-10-20T05:25:42 -03:00",
        "isFileAttached": false,
        "fullDescription": false
      },
      {
        "id": "589c2b8036fbd42c337ee313",
        "fullName": "Iva Scott",
        "email": "ivascott@evidends.com",
        "subject": "irure in adipisicing tempor voluptate",
        "shortDescription": "irure duis minim proident cupidatat dolor commodo duis id do",
        "isFavorite": true,
        "date": "2016-12-01T07:36:36 -02:00",
        "isFileAttached": true,
        "fullDescription": true
      },
      {
        "id": "589c2b80eef9a467961fa886",
        "fullName": "Melissa Mitchell",
        "email": "melissamitchell@evidends.com",
        "subject": "minim labore officia fugiat in",
        "shortDescription": "irure sunt ea magna incididunt minim pariatur exercitation enim tempor",
        "isFavorite": true,
        "date": "2016-10-28T10:52:51 -03:00",
        "isFileAttached": true,
        "fullDescription": true
      },
      {
        "id": "589c2b8011dd276c5b3d1cc7",
        "fullName": "Sexton Chen",
        "email": "sextonchen@evidends.com",
        "subject": "labore mollit occaecat labore cillum",
        "shortDescription": "do est ullamco qui irure deserunt dolore quis id elit",
        "isFavorite": false,
        "date": "2016-07-25T01:06:56 -03:00",
        "isFileAttached": false,
        "fullDescription": false
      },
      {
        "id": "589c2b80d68855d351d52ede",
        "fullName": "Coleman Adams",
        "email": "colemanadams@evidends.com",
        "subject": "commodo ipsum anim id veniam",
        "shortDescription": "commodo ex magna do magna sint minim nulla id exercitation",
        "isFavorite": false,
        "date": "2016-04-09T06:49:42 -03:00",
        "isFileAttached": true,
        "fullDescription": false
      },
      {
        "id": "589c2b802403403be151590a",
        "fullName": "Goodman Baird",
        "email": "goodmanbaird@evidends.com",
        "subject": "consectetur ad consectetur eiusmod ipsum",
        "shortDescription": "consectetur ex aliqua consectetur aliqua nulla cupidatat incididunt nisi culpa",
        "isFavorite": true,
        "date": "2016-10-02T04:35:12 -03:00",
        "isFileAttached": false,
        "fullDescription": true
      },
      {
        "id": "589c2b8043c62286b5d1e2a1",
        "fullName": "Selma Buckley",
        "email": "selmabuckley@evidends.com",
        "subject": "aliqua laborum incididunt tempor cupidatat",
        "shortDescription": "consequat culpa laboris duis eu enim mollit sint adipisicing commodo",
        "isFavorite": false,
        "date": "2016-12-08T08:48:28 -02:00",
        "isFileAttached": false,
        "fullDescription": true
      },
      {
        "id": "589c2b802a06bd2b5414e971",
        "fullName": "Brandy Hawkins",
        "email": "brandyhawkins@evidends.com",
        "subject": "anim sint deserunt ex culpa",
        "shortDescription": "duis sunt mollit id ea ut dolor cupidatat dolor qui",
        "isFavorite": true,
        "date": "2016-07-26T09:19:46 -03:00",
        "isFileAttached": true,
        "fullDescription": false
      }
    ];
  }

  public onSearch(searchValue) {
    this.searchValue = searchValue;
  }


  ngOnInit() {



  }

}
