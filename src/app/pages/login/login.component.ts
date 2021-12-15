import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../sharedservices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  usr!:User[];
  myForm!: FormGroup;
  error =0;
  err:number =0;
  notif:boolean=true;
   
  constructor(private authService : AuthService,public router: Router) { }
    
  ngOnInit(): void { 
    this.myForm = new FormGroup({
      'username': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required),
      
    })
  
  }
 onLoggedin(){

  this.authService.getUserFromDB(this.user.username).subscribe((data:any[])=>
  {
    this.usr=data;
    console.log(this.usr);
  if(this.usr[0].password==this.user.password)
  {

    this.authService.setLoggedUserFromLocalStorage(this.usr[0]);
      this.router.navigate(['/dashboard']);
    }
    else
    this.notif=false;
  },(err) =>console.log(err));
}
}
