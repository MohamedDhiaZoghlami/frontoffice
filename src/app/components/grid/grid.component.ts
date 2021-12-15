import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  productList!:Product[];
  constructor(public api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe((data:Product[])=>{
      this.productList = data;
      console.log(this.productList)
    })
  }

}
