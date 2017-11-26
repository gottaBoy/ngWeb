import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuperbModule} from "../superb/superb.module";

@NgModule({
  imports: [
    CommonModule,
    SuperbModule
  ],
  exports:[
    CommonModule,
    SuperbModule
  ],
  declarations: []
})
export class SharedModule { }
