import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategProdComponent } from './categ-prod.component';

describe('CategProdComponent', () => {
  let component: CategProdComponent;
  let fixture: ComponentFixture<CategProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
