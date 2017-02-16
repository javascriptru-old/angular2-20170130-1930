import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user;

  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  public isBlue: boolean = false;
 
  constructor() { }

  public select(e){
    this.onSelect.emit(this.user);
  }
  
  public delete(e) {
    console.log();
    this.onDelete.emit(this.user);
  }

  ngOnInit() {
  }

}
