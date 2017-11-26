import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import {StockModule} from "../stock/stock.module";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    StockModule
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    // ContentComponent,
    // DashboardComponent,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    // ContentComponent,
    // DashboardComponent
  ]
})
export class CoreModule { }
