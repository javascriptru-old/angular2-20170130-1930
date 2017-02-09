import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mail-filter',
  templateUrl: './mail-filter.component.html',
  styleUrls: ['./mail-filter.component.css']
})
export class MailFilterComponent implements OnInit {
  @Output() onFilter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public filter(value: string): void {
    this.onFilter.emit(value);
  }
}
