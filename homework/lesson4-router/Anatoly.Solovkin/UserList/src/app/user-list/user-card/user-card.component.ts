import { Component, OnInit } from '@angular/core';
import { User } from "../../user"
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/pluck";
import { UserService } from '../../user-service.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public user: User;

  constructor(private userServise: UserService, private route: ActivatedRoute) { 
    this.route.data.pluck('users').subscribe((users: User[]) => {
        this.route.params.pluck('id').subscribe((id: number) => {
          var result: User[] = users.filter(u => {return u.id == id});
          
          this.user =  result.length>0
            ? <User>result[0]
            : new User(undefined);

          this.userServise.selectUser(this.user);
        });
      });
  }

  ngOnInit() {
  }
}