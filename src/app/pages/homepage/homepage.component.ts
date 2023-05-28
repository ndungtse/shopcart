import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { AppState } from 'src/app/store';
import { loadProducts } from 'src/app/store/products/product.actions';
import {
  selectLoading,
  selectProducts,
} from 'src/app/store/products/product.selector';
import { Product } from 'src/app/utils/types/type.1';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  products: Product[] = [];
  loading: boolean = true;

  constructor(
    private store: Store<AppState>,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.store.select(selectProducts).subscribe((products) => {
      console.log(products);
      this.products = products;
    });
    this.store.select(selectLoading).subscribe((loading) => {
      this.loading = loading;
    });
    console.log('init');
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().pipe(
      map((products) => {
        this.products = products;
        this.loading = false;
      }),
      catchError((error) => {
        console.log(error);
        this.loading = false;
        return error;
      })
    );
  }
}
