import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { CategoryCardContainerComponent } from './components/category-card-container/category-card-container.component';

const routes: Routes = [
  {path:'',component:CategoryCardContainerComponent},
  {path:':name', component:CatDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
