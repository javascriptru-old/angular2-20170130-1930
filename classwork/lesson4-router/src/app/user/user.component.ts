import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute,
     private router: Router) {
    // this.route.params.pluck('userId').subscribe((userId) => {
    //   debugger
    // });
    // this.route.data.pluck('user').subscribe((user) => {
    //   debugger
    // });
    // this.router.events.subscribe((event: Event) => {
    //   if(event instanceof NavigationStart) {
    //       //...
    //   }
    // });

    this.route.data.pluck('course').subscribe((course) => {
      debugger
    });
  }

  ngOnInit() {
  }

}
