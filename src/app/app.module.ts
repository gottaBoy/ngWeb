import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {Routes, RouterModule} from "@angular/router";
import {StockManageComponent} from "./stock/stock-manage/stock-manage.component";
import {DashboardComponent} from "./core/dashboard/dashboard.component";
import {StockFormComponent} from "./stock/stock-form/stock-form.component";
import {ContentComponent} from "./core/content/content.component";
import {StockService} from "./stock/stock.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

const routeConfig:Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'stock',component:StockManageComponent},
  {path:'stock/:id',component:StockFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
