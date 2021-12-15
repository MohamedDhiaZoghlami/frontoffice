import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  urlProduct='http://localhost:3000/product';
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type' : 'application/json'
    })
  }

  constructor(private http : HttpClient) { }
  getAllProduct() {
    return this.http.get<product[]>(this.urlProduct);
  }
  setNewPrice(id:number, pro:product){
    return this.http.put<product>(`${this.urlProduct}/${id}`, JSON.stringify(pro),this.httpOptions);
  }  
}
