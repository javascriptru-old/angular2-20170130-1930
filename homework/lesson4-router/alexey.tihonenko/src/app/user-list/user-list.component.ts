import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users;
  constructor(private route:ActivatedRoute) {
    this.route.data.subscribe((data:any) => {
      this.users = data.users;
    });
  }

  ngOnInit() {
  }

}
