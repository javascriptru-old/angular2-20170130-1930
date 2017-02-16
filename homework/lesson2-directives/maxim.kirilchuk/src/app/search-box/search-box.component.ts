import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() onSearch = new EventEmitter<any>();

  constructor() { }

  search(searchValue) {
    this.onSearch.emit(searchValue);
  }

  ngOnInit() {
    this.onSearch.emit('');
  }

}
