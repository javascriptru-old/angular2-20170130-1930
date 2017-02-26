import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserCardComponent} from "./user-list/user-card/user-card.component";
import {UserService} from "./user.service";
import {UserListResolveService} from "./user-list/user-list-resolve.service";
import {appRouters} from "./routers";
import {AuthorizationComponent} from './authorization/authorization.component';
import {CanActivateService} from "./can-activate.service";
import {AuthService} from "./auth.service";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [
    UserService,
    UserListResolveService,
    CanActivateService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
