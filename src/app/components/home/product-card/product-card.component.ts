import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToCart,
  removeFromCart,
} from 'src/app/store/products/product.actions';
import { selectOnCart } from 'src/app/store/products/product.selector';
import { Product } from 'src/app/utils/types/type.1';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product | null = null;
  cartProducts: Product[] = [];
  isOnCart: boolean = false;

  constructor(private store: Store) {
    this.store.select(selectOnCart).subscribe((onCart) => {
      this.cartProducts = onCart;
    });
  }

  ngOnInit(): void {
    this.isOnCart = this.cartProducts.some(
      (product) => product.id === this.product?.id
    );
  }
  ngDoCheck(): void {
    this.isOnCart = this.cartProducts.some(
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
  }
  handleCartClick() {
    this.isOnCart
      ? this.removeFromCart(this.product!)
      : this.addToCart(this.product!);
  }

  removeFromCart(product: Product) {
    console.log('removeFromCart', product);
    this.store.dispatch(removeFromCart({ productId: product?.id as string }));
  }
}
