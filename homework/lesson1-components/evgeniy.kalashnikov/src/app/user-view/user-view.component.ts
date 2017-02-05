import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  
  @Input() user: {
    id: number,
    fullName: string,
    avatarUrl: string,
    birthdate: string,
    gender: string,
    address: string,
    email: string
  };
  @Output() deleteUserEvent: EventEmitter<number> = new EventEmitter;

  isMarked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  mark(): void {
    this.isMarked = !this.isMarked;
  }

  deleteUser(id: number): void {
    this.deleteUserEvent.emit(id);
  }
}
