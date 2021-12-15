import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/sharedservices/user.service';

@Component({
  selector: 'app-updatecategoryuser',
  templateUrl: './updatecategoryuser.component.html',
  styleUrls: ['./updatecategoryuser.component.css']
})
export class UpdatecategoryuserComponent implements OnInit {

  currentUser = new User();
  user = new User();
  message!:string;
  myForm!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService,private router :Router ){ }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      'newusername': new FormControl('',Validators.required),
    
     
    
    })
     //console.log(this.activatedRoute.snapshot.params.username);
     this.userService.consulterUser(this.activatedRoute.snapshot.params.username).
    subscribe( user =>{ this.currentUser = user; });

  
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
