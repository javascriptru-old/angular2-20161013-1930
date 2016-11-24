import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import {AuthGuardService} from './auth-guard.service';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService],
    // canDeactivate: function():boolean {
    //   return window.confirm('You have unsaved changes. Still wonna go?')
    // }
  },
  {path: 'later', loadChildren: 'app/later/later.module#LaterModule'}
];

/*
- CanActive
- canDeactivate
- Resolve
- CanLoad
 */


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
