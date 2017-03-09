import { Directive,Input,  TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective implements OnInit{

  @Input() delay: number;

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef) {}

  ngOnInit(){
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, this.delay);
  }

}

/*
<div *my="delay"> </div>

<template [my]="delay">
  <div> </div>
</template>


 */
