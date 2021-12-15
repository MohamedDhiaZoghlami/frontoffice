import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() name!:string;
  @Input() price!:number;
  @Input() promo!:number;
  @Input() description!:string;
  @Input() photo!:string;
  promotion:boolean=false;
  finalPrice!:string;
  constructor() { }

  ngOnInit(): void {
    if(this.promo!=0) {
      this.promotion=true;
    }
    this.finalPrice=(this.price*(1-this.promo)).toFixed(2);
  }

}
