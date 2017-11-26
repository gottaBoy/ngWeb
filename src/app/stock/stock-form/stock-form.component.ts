import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from "../stock.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock:Stock;
  constructor(private routeInfo:ActivatedRoute,private stockService:StockService,
              private router:Router) { }

  ngOnInit() {
    // this.stock = new Stock(1,"第一只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网"]);
    let stockId = this.routeInfo.snapshot.params["id"];
    this.stock = this.stockService.getStock(stockId);
  }

  cancel(){
    this.router.navigateByUrl('/stock');
  }
  save(){
    this.router.navigateByUrl('/stock');
  }

}
