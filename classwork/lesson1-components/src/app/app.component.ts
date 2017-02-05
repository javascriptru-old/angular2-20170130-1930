import { Component } from '@angular/core';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'app works!';
  name = 'John';
  componentClass = 'red';
  isRed = true;
  myColor: string = 'green';
  myUser = {
    name: 'Bob',
    age: 20
  };
  isShown = true;
  items =  [1,2,3];
  users = [1,2,3];

  constructor() {
    setTimeout(() => {
      this.myColor = 'red';
    }, 3000);
  }

  changeColor(color: string): void {
    this.myColor = color;
  }

  takesomething(text) {
    alert(text);
  }
}


/*
Directives:

- Components
- Attribute directives
  - Structural directivs

*/