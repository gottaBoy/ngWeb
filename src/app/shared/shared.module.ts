import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuperbModule} from "../superb/superb.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    SuperbModule
  ],
  exports:[
    CommonModule,
    // FormsModule,
    SuperbModule
  ],
  declarations: []
})
export class SharedModule { }
