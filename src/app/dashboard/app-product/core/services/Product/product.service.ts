import { Injectable } from '@angular/core';
import { Product } from '../../model/product.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = "http://localhost:3000/" + 'products/';
  constructor(private http: HttpClient) {}

  getListProduct() {
    return this.http.get<Product[]>(this.url);
  }

  addProduct(product: Product) {
    return this.http.post(this.url, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(this.url + id);
  }
  updateProduct(product: Product) {
    return this.http.put(this.url + product.id, product);
  }
}
