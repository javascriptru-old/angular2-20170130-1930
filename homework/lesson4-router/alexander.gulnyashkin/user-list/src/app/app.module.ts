import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListComponent } from './home/user-list/user-list.component';
import { UserCardComponent } from './home/user-list/user-card/user-card.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthComponent } from './auth/auth.component';
import { UserService } from './home/user-list/user.service';
import { AuthService } from './auth/auth.service';

const routes = [
    {
        path: '',
        component: AuthComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthService]
    },
    {
        path: 'user/:userId',
        component: UserComponent,
        resolve: {
            user: UserService
        },
        canActivate: [AuthService]
    }
]

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserCardComponent,
        HomeComponent,
        UserComponent,
        NavigationComponent,
        AuthComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [UserService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {}
