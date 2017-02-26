import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  private user;

  constructor(private route:ActivatedRoute) {
    this.route.data.subscribe((data:any) => {
      this.user = data.user;
    });
  }

  ngOnInit() {
  }

}
