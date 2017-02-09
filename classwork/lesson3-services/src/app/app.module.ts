import { WindowService } from './window.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarService } from './car.service';
import { Users } from './users.class';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: Users, useClass: Users },
    WindowService,
    { provide: CarService, useClass: CarService } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
