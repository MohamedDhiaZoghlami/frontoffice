import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {Category} from './category';
import { ProductCateg } from './models/productCateg';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl='http://localhost:3000/category';
  prodUrl="http://localhost:3000/products";
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type' : 'application/json'
    })
  }

  constructor(private http : HttpClient) { }
  createCategory(category:any): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, JSON.stringify(category), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 
  getAllCategories():Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  deleteCategory(id:number){
    return this.http.delete<Category>(`${this.apiUrl}/${id}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getById(id:number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:number, category:Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${id}`, JSON.stringify(category), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getAllProducts():Observable<ProductCateg[]> {
    return this.http.get<ProductCateg[]>(this.prodUrl)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
