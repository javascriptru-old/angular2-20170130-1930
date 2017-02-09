import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from "../user"

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

  delete(e: PointerEvent) {
     this.onDelete.emit(this.user);
   }

   select(e) {
     this.onSelect.emit(this.user);
   }
}


