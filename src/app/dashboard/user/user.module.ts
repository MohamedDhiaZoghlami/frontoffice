import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListuserComponent } from './listuser/listuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatecategoryuserComponent } from './updatecategoryuser/updatecategoryuser.component';



@NgModule({
  declarations: [
    ListuserComponent,
    UpdatecategoryuserComponent
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
