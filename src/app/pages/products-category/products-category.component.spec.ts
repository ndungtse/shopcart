import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoryComponent } from './products-category.component';

describe('ProductsCategoryComponent', () => {
  let component: ProductsCategoryComponent;
  let fixture: ComponentFixture<ProductsCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCategoryComponent]
    });
    fixture = TestBed.createComponent(ProductsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
