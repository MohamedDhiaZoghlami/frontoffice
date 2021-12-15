import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryCardContainerComponent } from './components/category-card-container/category-card-container.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategProdComponent } from './components/categ-prod/categ-prod.component';
import { CategProdContainerComponent } from './components/categ-prod-container/categ-prod-container.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';


@NgModule({
  declarations: [
    CategoryCardContainerComponent,
    CategProdComponent,
    CategProdContainerComponent,
    CatDetailsComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports : [
    CategoryCardContainerComponent,
    CatDetailsComponent,
    CategProdComponent
  ]

})
export class CategoryModule { }
