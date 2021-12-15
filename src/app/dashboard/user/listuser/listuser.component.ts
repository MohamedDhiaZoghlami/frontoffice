import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/sharedservices/user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  users!: User[];
  inputCategory!: string;
  category!: string;
  
  nbrFidele!:number;
  nbrOrdinaire!:number;
  nbrPremuim!:number;

  constructor(private route: ActivatedRoute,private userService: UserService) {
  
  

 }
 
  ngOnInit(): void {

     this.userService.getUsersWS().subscribe(
      (data: User[]) => {this.users =data;
        this.nbrFidele = this.users.filter(e=> e.categorieclient==="FIDELE" ).length;
        this.nbrOrdinaire = this.users.filter(e=> e.categorieclient==="ORDINAIRE" ).length;
        this.nbrPremuim = this.users.filter(e=> e.categorieclient==="PREMUIM" ).length
      }
    );
      
  }

  deleteUser(id:string){

    let conf=confirm("Are you sure?");
    if(conf)
    this.userService.deleteUserWS(id).subscribe(
      ()=>this.users = this.users.filter(user=>user.id != id)
    )

  }

}
