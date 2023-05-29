import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToCart,
  getCartProducts,
  removeFromCart,
} from 'src/app/store/products/product.actions';
import { selectOnCart } from 'src/app/store/products/product.selector';
import { Product } from 'src/app/utils/types/type.1';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent {
  cartProducts: Product[] = [];
  isOnCart: boolean = false;
  product: any;

  constructor(private store: Store) {
    this.store.select(selectOnCart).subscribe((onCart) => {
      this.cartProducts = onCart;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(getCartProducts());
    this.isOnCart = this.cartProducts.some(
      (product) => product.id === this.product?.id
    );
  }
  ngDoCheck(): void {
    this.isOnCart = this.cartProducts.some(
      (product) => product.id === this.product?.id
    );
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
  }

  addToCart(product: Product) {
    console.log('addToCart', product);
    this.store.dispatch(addToCart({ product }));
  }

  removeFromCart(product: Product) {
    console.log('removeFromCart', product);
    this.store.dispatch(removeFromCart({ productId: product?.id as string }));
  }
}
