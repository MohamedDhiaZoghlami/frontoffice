import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { PromotionComponent } from './Promotion/promotion/promotion.component';

const routes: Routes = [
  {path:'',component:NavComponent, children:[
    {path:'category',loadChildren:
    ()=>import('./category/category.module').then(m=>m.CategoryModule)},
    {path:'listuser',loadChildren:
    ()=>import('./user/user.module').then(m=>m.UserModule)},
    {path:'product',loadChildren:
    ()=>import('./app-product/app-product.module').then(m=>m.AppProductModule)},
    {path:'promotion',component:PromotionComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
