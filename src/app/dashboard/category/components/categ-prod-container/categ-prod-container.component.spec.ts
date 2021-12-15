import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategProdContainerComponent } from './categ-prod-container.component';

describe('CategProdContainerComponent', () => {
  let component: CategProdContainerComponent;
  let fixture: ComponentFixture<CategProdContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategProdContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategProdContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
