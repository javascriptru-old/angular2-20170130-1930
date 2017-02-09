import { WindowService } from './window.service';
import { Component, Directive } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class CarService {

  private _random;

  constructor(window: WindowService) {
     this._random = Math.random();
  }

  getRandom() {
    return this._random;
  }

}
