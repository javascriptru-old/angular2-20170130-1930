import { Component } from '@angular/core';
import {Mail} from './mail-box/mail-box.component'


let mails = [
  {
    sender: 'Ермухан Абдраимов',
    theme: 'About your pizza',
    preview: `We can't deliver your pizza on time. We will be about 50 minutes late.
    Is that okay? Let us know because there are a lot of hungry people in the world.`,
    date: new Date(2017, 1, 12)
  },
  {
    sender: 'Жанибек Жансеитов',
    theme: 'Спамище',
    preview: 'Какой-то спам',
    date: new Date(2017, 1, 10)
  },
  {
    sender: 'Генадий Головкин',
    theme: 'Тот самый щенок',
    preview: 'Канело все еще не готов выйти драться. И после всего того, он может называть себя мексиканцем?!',
    date: new Date(2017, 1, 10, 12)
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';
  mails: Array<Mail> = mails;
  filterValue = '';

  public filterInput(event):void {
    this.filterValue = event.target.value;
  }
}
