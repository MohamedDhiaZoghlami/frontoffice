import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Product } from './app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl="http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type' : 'application/json'
    })
  }

  constructor(private http : HttpClient) { }
  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`)
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
