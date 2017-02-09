import { Component } from '@angular/core';

import { letter } from './mail-box/mail-box.component';

const lettersList: letter[] = require('../../../letters.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {

  lettersList: letter[] = lettersList;

}
