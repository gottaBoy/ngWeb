import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import { StockManageComponent } from './stock-manage/stock-manage.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockFilterPipe } from './stock-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    StockManageComponent,
    StockFormComponent,
    StockFilterPipe
  ],
  exports:[
    StockManageComponent,
    StockFormComponent
  ]
})
export class StockModule { }
