import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public isBlue:boolean = false;
  @Input() user;
  @Input() index;
  @Output() prepareDestroy:EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  
  changeBg() {
    this.isBlue = !this.isBlue;
  }
  
  onDestroy(index) {
    this.prepareDestroy.emit(index)
  }
}
