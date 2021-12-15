import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { UpdatecategoryuserComponent } from './updatecategoryuser/updatecategoryuser.component';

const routes: Routes = [
  {path:'',component:ListuserComponent},
  {path:'update/:username',component:UpdatecategoryuserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
