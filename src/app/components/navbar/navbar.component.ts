import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectFavProducts,
  selectOnCart,
} from 'src/app/store/products/product.selector';
import { Product } from 'src/app/utils/types/type.1';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // standalone: true,
})
export class NavbarComponent implements OnInit {
  isMobile: boolean = false;
  cartProducts: Product[] = [];
  favProducts: Product[] = [];

  constructor(private store: Store, private router: Router) {
    this.store.select(selectOnCart).subscribe((onCart) => {
      this.cartProducts = onCart;
    });
    this.store.select(selectFavProducts).subscribe((onFav) => {
      this.favProducts = onFav;
    });
  }

  ngOnInit(): void {
    this.router.events.pipe().subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isMobile = false;
      }
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
