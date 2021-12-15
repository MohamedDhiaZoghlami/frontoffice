import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient,HttpHeaders } from '@angular/common/http';
import { promotions } from '../models/promotions';
@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  urlPromo='http://localhost:3000/promotions';
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type' : 'application/json'
    })
  }

  constructor(private http : HttpClient) { }
  getAllPromo() {
    return this.http.get<promotions[]>(this.urlPromo);
  }
  addPromo(p:promotions){
    return this.http.post(this.urlPromo, JSON.stringify(p), this.httpOptions);
  }
  deletePromo(id:number){
    return this.http.delete<promotions>(`${this.urlPromo}/${id}`);
  }
  getById(id:number){
    return this.http.get<promotions>(`${this.urlPromo}/${id}`)
  }
  update(id:number, promo:promotions){
    return this.http.put<promotions>(`${this.urlPromo}/${id}`, JSON.stringify(promo),this.httpOptions);
  }    
 }
