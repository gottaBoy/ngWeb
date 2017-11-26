import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor() { }

  private stocks:Stock[] = [
    new Stock(1,"第一只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网"]),
    new Stock(2,"第二只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网"]),
    new Stock(3,"第三只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网"]),
    new Stock(4,"第四只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网"]),
    new Stock(5,"第五只股票",1.99,3.5,"这是我买的第一只股票",["IT","互联网","金融"])
  ];

  getStocks(): Stock[]{
    return this.stocks;
  }

  getStock(id:number): Stock{
    var stock = this.stocks.find(stock => stock.id == id);
    if(!stock){
      return new Stock(0,"",0,0,"",[]);
    }
    return stock;
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
