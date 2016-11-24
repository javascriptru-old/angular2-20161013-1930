import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Later2Component } from './later2.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: Later2Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Later2Component]
})
export class Later2Module { }
