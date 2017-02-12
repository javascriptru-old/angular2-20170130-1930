import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

export class User {
    public firstName: string;
    public surname: string;
    public photo: string;
    public country: string;
    public selected: boolean = false;

    constructor(obj: any) {
        if (obj != undefined) {
            this.firstName = obj.firstName;
            this.surname = obj.surname;
            this.photo = obj.photo;
            this.country = obj.country;
        }
    }
}

