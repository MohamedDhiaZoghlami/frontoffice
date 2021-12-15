import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/Product/product.service';
import { Product } from '../core/model/product.model';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { PromotionsService } from '../../Promotion/Core/Services/promotions.service';
import{promotions} from '../../Promotion/Core/models/promotions';
@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css'],
})
export class MainProductComponent implements OnInit {
  inputProduct: Product = new Product();
  isForm: Boolean = false;
  buttonString: String = 'Add New Product';
  listProduct: Product[] = [];
  // listPromo:promotions[];
  // promo:promotions;

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    // private promotionService:PromotionsService
  ) {}

  ngOnInit(): void {
    this.productService
      .getListProduct()
      .subscribe((data: Product[]) => (this.listProduct = data));

      // this.promotionService.getAllPromo().subscribe((data:promotions[])=>this.listPromo=data); 
      // this.promo = new promotions();
  }

  changePage() {
    this.isForm = !this.isForm;
    if (this.isForm) {
      this.buttonString = 'Go Back To List';
    } else {
      this.inputProduct = new Product();
      this.buttonString = 'Add New Product';
    }
  }

  deleteProduct(p: Product) {
    const myCompDialog = this.dialog.open(DeleteDialogComponent, {
      disableClose: true,
      panelClass: 'dialog-custom',
    });
    myCompDialog.afterOpened().subscribe((res) => {
      // Trigger After Dialog Opened
      console.log('After Opened', { res });
    });
    myCompDialog.afterClosed().subscribe((res) => {
      // Trigger After Dialog Closed
      console.log('After Closed', { res });
      if (res) {
        let i = this.listProduct.indexOf(p);
        this.productService
          .deleteProduct(p.id)
          .subscribe(() => this.listProduct.splice(i, 1));
      }
    });
  }

  updateProduct(p: Product) {
    this.changePage();
    this.inputProduct = p;
  }

  saveProduct(product: Product) {
    //add a new product
    this.productService.addProduct(product).subscribe(
      () => this.listProduct.push(product),
      () => console.log('error')
    );
    this.changePage();
    this.inputProduct = new Product();
  }

  resaveProduct(product: Product) {
    //update a product
    let i = this.listProduct.indexOf(product);

    this.productService.updateProduct(product).subscribe(
      () => (this.listProduct[i] = product),
      () => console.log('error')
    );
    this.changePage();
  }
}
