import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../core/model/product.model';
import { PromotionsService } from '../../Promotion/Core/Services/promotions.service';
import{promotions} from '../../Promotion/Core/models/promotions';
import { ProductService } from '../core/services/Product/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() deleteEvent = new EventEmitter<Product>();
  @Output() updateEvent = new EventEmitter<Product>();
  listPromo:promotions[];
  listProduct: Product[] = [];
  promo:promotions;

  constructor(    private promotionService:PromotionsService,private productService: ProductService ) {}

  ngOnInit(): void {
    this.promotionService.getAllPromo().subscribe((data:promotions[])=>this.listPromo=data); 
    this.promo = new promotions();
    
  }
   updatePrice(p:Product) {
           this.productService.updateProduct(p).subscribe();
          }
       newPrice(product:Product,p:promotions){
           product.nouveauPrix=product.prixUnitaire*(1-p.value/100);
           product.idPromo=p.id;
          this.updatePrice(product);
       }
       removePromo(p:Product){
         p.nouveauPrix=null;
         p.idPromo=null;
          this.updatePrice(p);
      }

  deleteNotif() {
    this.deleteEvent.emit(this.product);
  }
  updateNotif() {
    this.updateEvent.emit(this.product);
  }
}
