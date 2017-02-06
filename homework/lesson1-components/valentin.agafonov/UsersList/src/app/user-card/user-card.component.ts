import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})

export class UserCardComponent implements OnInit {

  @Input() user;
  @Output() onSelect: EventEmitter<string>  = new EventEmitter();
  @Output() onRemove: EventEmitter<string>  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleSelect():void {
    this.onSelect.emit();
  }

  handleRemove():void {
    this.onRemove.emit();
  }

}
