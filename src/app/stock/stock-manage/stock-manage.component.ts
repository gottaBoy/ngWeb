import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks:Array<Stock>;
  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock(1,"第一只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网"]),
      new Stock(2,"第二只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网"]),
      new Stock(3,"第三只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网"]),
      new Stock(4,"第四只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网"]),
      new Stock(5,"第五只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网","金融"])
    ];
  }

  update(stock:Stock){
     console.log("update");
  }

}

export class Stock {
  constructor (
    public id:number,
    public name:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}
