import { CarService } from './car.service';
import { Component } from '@angular/core';
import { Users } from './users.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
    // Users, CarService,
    // //{ provide: Users, useClass: Users },  //useClass
    // { provide: 'Users', useClass: CarService },   // alias
    // { provide: Users, useFactory: function() {  // useFactory
    //      if(true) {
    //        return new Users();
    //      }
    // }},
    // { provide: 'API_URL', useValue: 'http://' },  //useValue
    // { provide: CarService, useClass: CarService } ]
})
export class AppComponent {
  title = 'app works!';
  constructor(private users: Users) {
    //let users = new Users();
    //users.getAll();

    //users.getAll
  }

  anotherMethod() {
    //this.users.getAll
  }
}

/*

- Directives
- Components
- Pipes

- Services (just classes + DI)


 Dependency Injection

 - provider
 - injector
 - dependancy (class itself)

*/
