import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/sharedservices/user.service';

@Component({
  selector: 'app-myprofil',
  templateUrl: './myprofil.component.html',
  styleUrls: ['./myprofil.component.css']
})
export class MyprofilComponent implements OnInit {

  currentUser = new User();
  user = new User();
  myForm!: FormGroup;

 constructor(private userService: UserService, public router: Router) { }

 ngOnInit(): void {

  const ch = JSON.parse(localStorage.getItem('user') || '{}');
  console.log(ch)
   this.myForm = new FormGroup({
     'firstname':new FormControl('',Validators.required) ,
     'lastname': new FormControl('',Validators.required),
     'username': new FormControl('',Validators.required),
     'birthday': new FormControl('',Validators.required),
     'email': new FormControl('',Validators.required),
     'password': new FormControl('',Validators.required),
     'confpass': new FormControl('',Validators.required),
  
   })
   this.currentUser=ch;

   
 } 

 updateCategorieUser(){
    
  console.log(this.currentUser);
  let conf=confirm("Are you sure?");
  if(conf){
    this.userService.updateUserWs(this.currentUser).subscribe(() => {
      this.router.navigate(['/listuser']);
      }
      );
}
}

}
