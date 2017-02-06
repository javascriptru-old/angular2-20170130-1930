import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {

 // @Input() user;

 //directives
 // -- component
 // -- attribute
 // -- structural

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes) {

  }

  //Change Detection (Model <-> View)
  ngDoCheck() {

  }

  ngOnDestroy() {

  }

}
