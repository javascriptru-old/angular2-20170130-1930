import { Component } from '@angular/core';

import { userItem } from '../user-info.service'


let usersJSON: userItem[] = require('../../../../../../users.json');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})

export class HomeComponent {

  usersList = usersJSON;

}
