import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToFav,
  getFavProducts,
  removeFromFav,
} from 'src/app/store/products/product.actions';
import { selectFavProducts } from 'src/app/store/products/product.selector';
import { Product } from 'src/app/utils/types/type.1';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
})
export class FavoritePageComponent {
  favProducts: Product[] = [];
  isOnFav: boolean = false;
  product: any;

  constructor(private store: Store) {
    this.store.select(selectFavProducts).subscribe((onFav) => {
      this.favProducts = onFav;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(getFavProducts());
    this.isOnFav = this.favProducts.some(
      (product) => product.id === this.product?.id
    );
  }
  ngDoCheck(): void {
    this.isOnFav = this.favProducts.some(
      (product) => product.id === this.product?.id
    );
    localStorage.setItem('favProducts', JSON.stringify(this.favProducts));
  }

  addToFav(product: Product) {
    console.log('addToFav', product);
    this.store.dispatch(addToFav({ product }));
  }

  removeFromFav(product: Product) {
    console.log('removeFromFav', product);
    this.store.dispatch(removeFromFav({ productId: product?.id as string }));
  }
}
