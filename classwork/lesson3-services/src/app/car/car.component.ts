import { Http } from '@angular/http';
import { CarService } from './../car.service';
import { Component, Inject, OnInit } from '@angular/core';

import 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [
    { provide: CarService, useClass: CarService }
  ]

})
export class CarComponent implements OnInit {

  public random;

  constructor(private _http: Http) {
     let o = this._http.get('https://api.github.com/search/repositories?q=1111')
     o.subscribe((data) => {

     });
  }

  ngOnInit() {
  }

}
