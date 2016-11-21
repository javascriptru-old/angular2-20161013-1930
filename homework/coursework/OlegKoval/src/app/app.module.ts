import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { RoutesComponent } from './components/routes/routes.component';
import { RouteComponent } from './components/route/route.component';

import { ContactService } from './services/contact.service';
import { RouteService } from './services/route.service';
import { RoutesPipe } from './pipes/routes.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'route/:id', component: RouteComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        RoutesComponent,
        RoutesPipe,
        RouteComponent,
        HomeComponent,
        ContactComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAc0evVnZhg5t1fpkrME9n8mUuWYMJ6Ny8'
        }),
        RouterModule.forRoot(appRoutes)
    ],
    providers: [RouteService, ContactService],
    bootstrap: [AppComponent]
})
export class AppModule { }
