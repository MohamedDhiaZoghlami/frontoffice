import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root'
}) 
export class AuthService {

  /*  users: User[] = [
          {"username":"raedjaidi","password":"123raed","roles":["ADMIN"]},
           {"username":"raed","password":"123raed","roles":["USER"]}]; */


          //  apiURL:string ='http://localhost:8081/SpringMVC/servlet//login';
          apiURL:string = "http://localhost:3000/users?username="
          
           public loggedUser!:User;
            public isloggedIn: Boolean = false;
          //  public roles!:Role[];
           token!:string;
  
  constructor(private router: Router, private http: HttpClient) { }

        getUserFromDB(username:string):Observable<User[]>{
          const url = `${this.apiURL}/${username}`
          return this.http.get<User[]>(`http://localhost:3000/users?username=${username}`);
        }


setLoggedUserFromLocalStorage(user : User) {
  this.loggedUser = user;
  this.isloggedIn = true;
  localStorage.setItem('user',JSON.stringify(this.loggedUser));
  localStorage.setItem('isloggedIn',JSON.stringify(this.isloggedIn));

}

  
}
 