import { Component } from '@angular/core';
import {letters} from './letters'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  letters: Array<any> = letters;
}
