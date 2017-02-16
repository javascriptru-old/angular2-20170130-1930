import { CarResolveService } from './car-resolve.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes = [
  { path: '', component: HomeComponent},
  { path: 'user/:userId',
    data: { user: {name: 'John'} },
    resolve: {
      course: CarResolveService
    },
    component: UserComponent,
    canActivate: [AuthService]}
];

/*
- canActivate/canActivateChild
- canDeactivate
- canLoad
- Resolve
*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [AuthService, CarResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
