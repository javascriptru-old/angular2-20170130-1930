import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  searchValue:string = '';

  onSearch(value:string) {
    this.searchValue = value;
  }

}
