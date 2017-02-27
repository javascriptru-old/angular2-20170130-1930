import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public fetchingUsers: boolean = false;

  constructor(private userServise: UserService) { 
  }

  public GetUsers(): User[] {
    return this.userServise.users;
  }

  private getUserList(refresh: boolean = false): void {
    this.fetchingUsers = true;
    this.userServise.getUsers(refresh).subscribe(() => this.fetchingUsers = false);    
  }

  public RefreshUsersList() {
    this.getUserList(true);    
  }

  public hasUsers(): boolean {
    return this.userServise.hasUsers();
  }

  public selectUser(user: User): void {
    this.userServise.selectUser(user);
  }

  public deleteUser(user: User): void {
    if (this.userServise.users != undefined && user != undefined &&
        confirm("Вы действительно хотите удалить пользователя \""+user.surname+" "+user.firstName+"\" из списка?")) {
  
      var index =  this.userServise.users.indexOf(user);

      if (index>=0)
        this.userServise.users.splice(index, 1);
    }
  }

  ngOnInit() {
    this.getUserList();    
  }

}
