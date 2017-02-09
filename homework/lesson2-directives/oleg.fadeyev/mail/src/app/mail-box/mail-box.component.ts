import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Email } from "../common";
import { emails } from "../common";

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
    public eMails: Email[];
    
    @Output() onFilter: EventEmitter<string> = new EventEmitter();

    constructor() {
        this.eMails = emails;
    }

    ngOnInit() {
  }

    public filter(value: string): void {        
        this.onFilter.emit(value);
    }

}
