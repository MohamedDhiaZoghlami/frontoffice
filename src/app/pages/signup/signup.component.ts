import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/sharedservices/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm!: FormGroup;
  newUserSubscribe = new User();
  users!: User[];
  messageForUser!:string;
 constructor(private userService: UserService, public router: Router) { }

 ngOnInit(): void {


   this.myForm = new FormGroup({
     'firstname': new FormControl('',Validators.required),
     'lastname': new FormControl('',Validators.required),
     'username': new FormControl('',Validators.required),
     'birthday': new FormControl('',Validators.required),
     'email': new FormControl('',Validators.required),
     'password': new FormControl('',Validators.required),
     'confpass': new FormControl('',Validators.required),
  
   })
   this.newUserSubscribe.categorieclient = "ORDINAIRE";
      this.newUserSubscribe.isAdmin = false;
 } 

addUser(){

   this.userService.postUserWS(this.newUserSubscribe).subscribe(
     ()=> {
      
     // this.users = [this.newUserSubscribe, ...this.users];
      localStorage.setItem('user',JSON.stringify(this.newUserSubscribe));
      localStorage.setItem('isloggedIn',JSON.stringify(true));
      this.router.navigate(['/']);
     }
   )
    this.messageForUser= "Welcome " + this.newUserSubscribe.lastname +" " +this.newUserSubscribe.firstname+ ",your account was created!";
}

}
