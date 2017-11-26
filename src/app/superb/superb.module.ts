import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartsComponent } from './starts/starts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StartsComponent
  ],
  exports:[
    StartsComponent
  ]
})
export class SuperbModule { }
