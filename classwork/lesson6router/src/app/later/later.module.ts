import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaterComponent } from './later.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LaterComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [LaterComponent]
})
export class LaterModule { }
