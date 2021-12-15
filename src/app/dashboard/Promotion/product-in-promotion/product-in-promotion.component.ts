// import { Component, OnInit } from '@angular/core';
// import { product } from 'src/app/Core/models/product';
// import { promotions } from 'src/app/Core/models/promotions';
// import { ProductServiceService } from 'src/app/Core/Services/product-service.service';
// import { PromotionsService } from 'src/app/Core/Services/promotions.service';

// @Component({
//   selector: 'app-product-in-promotion',
//   templateUrl: './product-in-promotion.component.html',
//   styleUrls: ['./product-in-promotion.component.css']
// })
// export class ProductInPromotionComponent implements OnInit {
//   listProduct:product[];
//   product:product;
//   listPromo:promotions[];
//   promo:promotions;

//   constructor(private productService:ProductServiceService ,private promotionService:PromotionsService) { }

//   ngOnInit(): void {
//     this.productService.getAllProduct().subscribe((data:product[])=>this.listProduct=data); 
//     this.product = new product();

//     this.promotionService.getAllPromo().subscribe((data:promotions[])=>this.listPromo=data); 
//     this.promo = new promotions();
//   }
//     updatePrice(p:product) {
//       this.productService.setNewPrice(p.id,p).subscribe();
//         }
//   newPrice(product:product,p:promotions){
//       product.newPrice=product.initialPrice*(1-p.value/100);
//       this.updatePrice(product);
//   }
//   removePromo(p:product){
//     p.newPrice=null;
//      this.updatePrice(p);
//  }
 

// }
