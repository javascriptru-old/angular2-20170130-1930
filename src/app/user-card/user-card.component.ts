import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})

export class UserCardComponent implements OnInit {

  @Input() user;
 
  constructor( ) { 
   
  }


  ngOnInit() {
  }

}
