import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import {FormControl} from "@angular/forms";
import "rxjs/Rx";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks:Array<Stock>;
  private nameFilter: FormControl = new FormControl();
  private keyword:string;
  constructor(public router:Router,private stockService:StockService) { }

  ngOnInit() {
    // this.stocks = [
    //   new Stock(1,"第一只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网"]),
    //   new Stock(2,"第二只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网"]),
    //   new Stock(3,"第三只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网"]),
    //   new Stock(4,"第四只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网"]),
    //   new Stock(5,"第五只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网","金融"])
    // ];
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword = value);
  }

  create(){
    this.router.navigateByUrl('/stock/0');
  }

  update(stock:Stock){
    this.router.navigateByUrl('/stock/'+ stock.id);
  }

}

// export class Stock {
//   constructor (
//     public id:number,
//     public name:string,
//     public price:number,
//     public rating:number,
//     public desc:string,
//     public categories:Array<string>
//   ){}
// }
