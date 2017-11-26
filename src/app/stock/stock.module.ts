import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import { StockManageComponent } from './stock-manage/stock-manage.component';
import { StockFormComponent } from './stock-form/stock-form.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    StockManageComponent,
    StockFormComponent
  ],
  exports:[
    StockManageComponent,
    StockFormComponent
  ]
})
export class StockModule { }
