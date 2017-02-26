import { Response } from '@angular/http';
import { Router, ActivatedRoute, Event } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],

})
export class UserCardComponent implements OnInit {

  @Input() user;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
    
  constructor() { }
                                    
  public delete(e){
    this.onDelete.emit(this.user);
    alert(`удаляем пользователя ${this.user.surname}`);
  }
  
  ngOnInit() {
  }

}
