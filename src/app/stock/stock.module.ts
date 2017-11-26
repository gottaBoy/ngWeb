import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import { StockManageComponent } from './stock-manage/stock-manage.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    StockManageComponent
  ],
  exports:[
    StockManageComponent
  ]
})
export class StockModule { }
