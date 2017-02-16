import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from "../../user"

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  @Output() onSelect: EventEmitter<User> = new EventEmitter();
  @Output() onDelete: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public delete(e: PointerEvent): void {
    this.onDelete.emit(this.user);
  }

  public select(e): void {
    this.onSelect.emit(this.user);
  }
}