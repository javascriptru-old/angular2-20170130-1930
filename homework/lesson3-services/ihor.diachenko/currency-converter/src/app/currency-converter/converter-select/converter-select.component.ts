import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-converter-select',
  templateUrl: './converter-select.component.html',
  styleUrls: ['./converter-select.component.css']
})
export class ConverterSelectComponent implements OnInit {

  @Input() units: string[];
  @Output() onSelect: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public select(unitValue:string): void {
    this.onSelect.emit(unitValue);
  }

}
