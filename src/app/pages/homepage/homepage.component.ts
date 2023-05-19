import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectProducts } from 'src/app/store/products/product.selector';
import { Product } from 'src/app/utils/types/type.1';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  products: Product[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.dispatch(loadProducts());
    this.store.select('products').subscribe((products) => {
      this.products = products.products;
    });
    this.products = selectProducts(this.store);
  }
}
