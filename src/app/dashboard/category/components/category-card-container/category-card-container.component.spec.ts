import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCardContainerComponent } from './category-card-container.component';

describe('CategoryCardContainerComponent', () => {
  let component: CategoryCardContainerComponent;
  let fixture: ComponentFixture<CategoryCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
