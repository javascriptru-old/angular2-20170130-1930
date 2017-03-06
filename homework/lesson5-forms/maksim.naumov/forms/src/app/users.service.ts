import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

export class User {
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
}

@Injectable()
export class UsersService {

  constructor() { }

  users: User[] = [
    {firstName: 'admin', lastName: "admin", mail: 'admin@mail.com', password: 'admin'}
  ];

  mailExist(mail: string): {[key: string]: string} {
    if (mail in  this.users.map(user => user.mail)) {
      return {error: "error"};
    }

    return null;
  }

  addUser(user:User) {
    this.users.push(user);
  }

  userExist(mail: string, pswd: string): boolean {
    for (let user of this.users) {
      if (user.mail == mail && user.password == pswd) {
        return true;
      }
    }

    return false;
  }

}
