import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Category } from '../../category';
import { ProdCat } from '../../models/prodCat';
import { ProductCateg } from '../../models/productCateg';

@Component({
  selector: 'app-categ-prod-container',
  templateUrl: './categ-prod-container.component.html',
  styleUrls: ['./categ-prod-container.component.css']
})
export class CategProdContainerComponent implements OnInit {
  fetchedData!:ProductCateg[];
  nametable:string[]=[];
  finalArray : ProdCat[] = [];
  constructor(private api:ApiService) { }
  
  ngOnInit(): void {
    this.api.getAllProducts().subscribe((data:ProductCateg[])=>{
      this.fetchedData = data;
    })
    this.api.getAllCategories().subscribe((data:Category[])=>{
      this.nametable = data.map(c=>c.name);
      this.nametable.forEach(t=>{
        this.finalArray.push({name:t,number:this.fetchedData.filter(e=>e.category===t).length})
      })
    })
  }

}
