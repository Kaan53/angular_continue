import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { C3Component } from './c3.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:"",
        component: C3Component
      }
    ])
  ]
})
export class C3Module { }
