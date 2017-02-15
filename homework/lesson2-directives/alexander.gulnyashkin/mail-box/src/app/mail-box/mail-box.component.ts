import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Letter } from './letter/letter.component';

@Component({
    selector: 'app-mail-box',
    templateUrl: './mail-box.component.html',
    styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit, OnChanges {
    @Input() public letters: Array<Letter>;
    @Input() public searchFilter: string;

    constructor() {}

    isEmpty () {
        return !this.letters;
    }

    ngOnInit() {}

    ngOnChanges () {
        console.log(this.letters);
    }

}
