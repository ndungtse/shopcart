import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToCart,
  addToFav,
  removeFromCart,
  removeFromFav,
} from 'src/app/store/products/product.actions';
import {
  selectFavProducts,
  selectOnCart,
} from 'src/app/store/products/product.selector';
import { Product } from 'src/app/utils/types/type.1';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product | null = null;
  cartProducts: Product[] = [];
  favProducts: Product[] = [];
  isOnCart: boolean = false;
  isOnFav: boolean = false;

  constructor(private store: Store) {
    this.store.select(selectOnCart).subscribe((onCart) => {
      this.cartProducts = onCart;
    });
    this.store.select(selectFavProducts).subscribe((onFav) => {
      this.favProducts = onFav;
    });
  }

  ngOnInit(): void {
    this.isOnCart = this.cartProducts.some(
      (product) => product.id === this.product?.id
    );
    this.isOnFav = this.favProducts.some(
      (product) => product.id === this.product?.id
    );
  }
  ngDoCheck(): void {
    this.isOnCart = this.cartProducts.some(
      (product) => product.id === this.product?.id
    );
    this.isOnFav = this.favProducts.some(
      (product) => product.id === this.product?.id
    );
  }

  // ngOnChanges(): void {
  //   this.isOnCart = this.cartProducts.some(
  //     (product) => product.id === this.product?.id
  //   );
  // }

  addToCart(product: Product) {
    console.log('addToCart', this.product);
    this.store.dispatch(addToCart({ product }));
    // save to local storage
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
  }
  handleCartClick() {
    this.isOnCart
      ? this.removeFromCart(this.product!)
      : this.addToCart(this.product!);
  }

  removeFromCart(product: Product) {
    console.log('removeFromCart', product);
    this.store.dispatch(removeFromCart({ productId: product?.id as string }));
    // save to local storage
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
  }

  addToFav(product: Product) {
    console.log('addToFav', this.product);
    this.store.dispatch(addToFav({ product }));
    // save to local storage
    localStorage.setItem('favProducts', JSON.stringify(this.favProducts));
  }
  handleFavClick() {
    this.isOnFav
      ? this.removeFromFav(this.product!)
      : this.addToFav(this.product!);
  }

  removeFromFav(product: Product) {
    console.log('removeFromFav', product);
    this.store.dispatch(removeFromFav({ productId: product?.id as string }));
    // save to local storage
    localStorage.setItem('favProducts', JSON.stringify(this.favProducts));
  }
}
