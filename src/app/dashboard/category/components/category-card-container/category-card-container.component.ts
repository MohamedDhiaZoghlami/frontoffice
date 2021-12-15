import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Category} from '../../category';
import { NgForm } from '@angular/forms';
import { CategoryModel } from '../../models/category.model';
@Component({
  selector: 'categoryCardContainer',
  templateUrl: './category-card-container.component.html',
  styleUrls: ['./category-card-container.component.css']
})
export class CategoryCardContainerComponent implements OnInit {
  category!:CategoryModel;
  categories: Category[] = [];
  arrIndex:any = [];
  modalOpen:boolean=false;

  constructor(public api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllCategories().subscribe((data:Category[])=>{
      this.categories = data;
    })
    this.category = new CategoryModel(); 
  }
  deleteCategories(id:number,categ:Category) {
    let i = this.categories.indexOf(categ);
    this.api.deleteCategory(id).subscribe(()=>{
      this.categories.splice(i,1);
      this.modalOpen=true;
      setTimeout(()=>{
        this.modalOpen=false;
      },2000);
    })
  }
  postCategoryDetails(f:NgForm,categ:Category) {
    let i=0;
    this.arrIndex = this.categories.map(categoryy=>categoryy.id)
    console.log(this.arrIndex);
    i = this.arrIndex.indexOf(categ.id);
    this.category.name = f.value['name'];
    this.category.ref = f.value['ref'];
    this.category.quantity = f.value["quantity"];
    if(i==-1) {
      this.api.createCategory(this.category)
    .subscribe(res=>{
      console.log(res);
      this.api.getAllCategories().subscribe((data:Category[])=>{
        this.categories = data;
      })
      f.reset();
      categ.id=0;
      this.modalOpen=true;
      setTimeout(()=>{
        this.modalOpen=false;
      },2000);
    },
    err=>{
      console.log("something is wrong")
    },
    );
    }
    else {
      this.api.update(categ.id,categ).subscribe(res=>{
        console.log(res);
      this.api.getAllCategories().subscribe((data:Category[])=>{
        this.categories = data;
      })
      f.reset();
      i=0;
      categ.id=0;
      this.modalOpen=true;
      setTimeout(()=>{
        this.modalOpen=false;
      },2000);
      })
    }
  }
  updateForm(id:number,f:NgForm) {
    this.api.getById(id).subscribe((data:Category)=>{
      this.category=data;
    })
  }
}
