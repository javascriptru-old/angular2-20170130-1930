import { Component, OnInit, Input } from '@angular/core';

export interface Letter {
    id: string,
    date: Date,
    name: string,
    email: string,
    content: string,
    highlightedName: string,
    highlightedEmail: string,
    highlightedContent: string
}

@Component({
    selector: 'app-letter',
    templateUrl: './letter.component.html',
    styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
    @Input() public letter: Letter;

    constructor() {}

    ngOnInit() {}
}
