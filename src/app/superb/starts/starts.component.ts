import {Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit, OnChanges {

  @Input()
  rating:number = 0;
  @Output()
  ratingChange:EventEmitter<number> = new EventEmitter();
  @Input()
  readonly:boolean = true;
  stars:boolean[];
  constructor() { }

  ngOnInit() {
    // this.stars = [];
    // for(let i = 1; i <= 5; i++){
    //   this.stars.push(i > this.rating);
    // }
  }

  ngOnChanges(changes:SimpleChanges):void {
    this.stars = [];
    for(let i = 1; i <= 5; i++){
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index:number){
    if(!this.readonly){
      this.rating = index + 1;
      // this.stars = [];
      // for(let i = 1; i <= 5; i++){
      //   this.stars.push(i > this.rating);
      // }
      this.ratingChange.emit(this.rating);
    }
  }

}
