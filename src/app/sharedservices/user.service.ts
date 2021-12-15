import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class UserService {
   users! : User[];
   user!: User;
   url ='http://localhost:3000/users/';

 
  constructor(private http: HttpClient) {
 
      
   }  
   consulterUser(username:string):Observable<User> {
    const url = `${this.url}/${username}`;
    return this.http.get<User>(url);
    }
  
      getUsersWS():Observable<User[]>{
      return this.http.get<User[]>(this.url,httpOptions)
    }
    postUserWS(user: User):Observable<User>{
      return this.http.post<User>(this.url,JSON.stringify(user),httpOptions);
    }
    deleteUserWS(id:string):Observable<User>{
      return this.http.delete<User>(this.url + id,httpOptions);
  }
  updateUserWs(user: User) :Observable<User>
  {
  return this.http.put<User>(this.url+user.id, user,httpOptions);
  }
  
   
} 
 