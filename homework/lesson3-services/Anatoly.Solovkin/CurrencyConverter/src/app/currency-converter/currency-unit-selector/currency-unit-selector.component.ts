import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-unit-selector',
  templateUrl: './currency-unit-selector.component.html',
  styleUrls: ['./currency-unit-selector.component.css']
})
export class CurrencyUnitSelectorComponent implements OnInit {
  @Input() availableUnits: string[] = [];
  @Output() onSelect: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public select(e): void {
    this.onSelect.emit(e);
  }

  ngOnInit() {
  }

}
