import { Component, OnInit } from '@angular/core';
import { promotions } from '../Core/models/promotions';
import { PromotionsService } from '../Core/Services/promotions.service';
import { NgForm } from '@angular/forms';
import { Product } from '../../../dashboard/app-product/core/model/product.model';
import { ProductService } from '../../app-product/core/services/Product/product.service';
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  list:promotions[];
  promotions:promotions;
  modalOpen:boolean=false;
  arrIndex:any = [];
  public Notify:number=0;
  public Notifyy:number=0;
  product: Product;
  listProduct: Product[] = [];

  constructor(private promotionService:PromotionsService,private productService: ProductService ) { }

  ngOnInit(): void {
    this.promotionService.getAllPromo().subscribe((data:promotions[])=>this.list=data); 
    this.promotions = new promotions();
    this.productService.getListProduct().subscribe((data: Product[]) => (this.listProduct = data));
   }
   checkPromo(p:Product[]){
    for(let i=0;i<p.length ;i++)
    if (p[i].idPromo===this.Notify){
     p[i].nouveauPrix=null;
    this.productService.updateProduct(p[i]).subscribe();
  }
   }
   checkPromo2(p:Product[]){
    console.log("******")
     console.log(this.Notifyy)
    for(let i=0;i<p.length ;i++)
    if (p[i].idPromo===this.Notifyy){
      console.log(p[i].idPromo)
      console.log(p[i].nouveauPrix)
     p[i].nouveauPrix=null;
    this.productService.updateProduct(p[i]).subscribe();
  }}
  deletePromo(id:number,p:promotions) {
    let i = this.list.indexOf(p);
    this.Notify=p.id;
    this.promotionService.deletePromo(id).subscribe();
      this.list.splice(i,1);
      return this.Notify;
  }
  updateForm(id:number,f:NgForm) {
    this.promotionService.getById(id).subscribe((data:promotions)=>{
      this.promotions=data;
    })
  }
    postPromoDetails(f:NgForm,p:promotions) {
    let i=0;
    this.arrIndex = this.list.map(data=>data.id)
    console.log(this.arrIndex);
    i = this.arrIndex.indexOf(p.id);
    this.promotions.name = f.value['name'];
    this.promotions.startingDate = f.value['startingDate'];
    this.promotions.endingDate = f.value['endingDate'];
    this.promotions.value = f.value['value'];
    if(i==-1) {
      this.promotionService.addPromo(this.promotions).subscribe(res=>{
        console.log(res);
      this.promotionService.getAllPromo().subscribe((data:promotions[])=>{
        this.list = data;
      })
      f.reset();
      p.id=0;
      this.modalOpen=true;
      setTimeout(()=>{
        this.modalOpen=false;
      },2000);
      },
      );
    return this.Notifyy;}
    else {
      this.Notifyy=p.id;
      this.promotionService.update(p.id,p).subscribe(res=>{
        console.log(res);
      this.promotionService.getAllPromo().subscribe((data:promotions[])=>{
        this.list = data;
      })
      f.reset();
      i=0;
      p.id=0;
      this.modalOpen=true;
      setTimeout(()=>{
        this.modalOpen=false;
      },2000);
      })
      ;
      return this.Notifyy; }
  }


}