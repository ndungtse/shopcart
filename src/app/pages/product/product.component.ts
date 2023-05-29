import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services/product.service';
import { addToCart } from 'src/app/store/products/product.actions';
import { selectOnCart } from 'src/app/store/products/product.selector';
import { Product } from 'src/app/utils/types/type.1';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  productId: string;
  photos = new Array(4).fill(0);
  product: Product | null = null;
  loading: boolean = true;
  error: string | null = null;
  isOnCart: boolean = false;
  cartProducts: Product[] = [];
  quantity: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store
  ) {
    this.productId = this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe({
      next: (product) => {
        this.product = product;
        this.loading = false;
        this.error = null;
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
        this.error = 'error fetching product';
      },
    });

    this.store.select(selectOnCart).subscribe((onCart) => {
      this.cartProducts = onCart;
    });
  }

  ngDoCheck(): void {
    this.isOnCart = this.cartProducts.some(
      (product) => product.id === this.product?.id
    );
  }

  addToCart(product: Product) {
    console.log('addToCart', product);
    this.store.dispatch(addToCart({ product }));
  }

  handleCartClick() {
    this.isOnCart
      ? this.removeFromCart(this.product!)
      : this.addToCart(this.product!);
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
  }

  removeFromCart(product: Product) {
    console.log('removeFromCart', product);
    this.store.dispatch(addToCart({ product }));
  }

  handleQuantityChange(inc: boolean) {
    if (inc) {
      this.quantity = this.quantity + 1;
    } else {
      if (this.quantity === 0) return;
      this.quantity = this.quantity - 1;
    }
  }
}
