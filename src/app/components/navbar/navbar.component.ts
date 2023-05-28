import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectOnCart } from 'src/app/store/products/product.selector';
import { Product } from 'src/app/utils/types/type.1';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // standalone: true,
})
export class NavbarComponent {
  isMobile: boolean = false;
  cartProducts: Product[] = [];

  constructor(private store: Store) {
    this.store.select(selectOnCart).subscribe((onCart) => {
      this.cartProducts = onCart;
    });
  }

  toggleMobileMenu() {
    console.log('toggleMobileMenu');
    this.isMobile = !this.isMobile;
  }

  setMenuFals() {
    this.isMobile = false;
  }
}
