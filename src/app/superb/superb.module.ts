import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartsComponent } from './starts/starts.component';
import { Code404Component } from './code404/code404.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StartsComponent,
    Code404Component
  ],
  exports:[
    StartsComponent,
    Code404Component
  ]
})
export class SuperbModule { }
