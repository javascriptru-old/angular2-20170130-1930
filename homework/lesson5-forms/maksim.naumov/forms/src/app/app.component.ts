import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _router: Router) {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.active_url = event.url;
      }
    })
  }

  private active_url = "";
}
