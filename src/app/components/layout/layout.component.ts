import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getCartProducts,
  getFavProducts,
} from 'src/app/store/products/product.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCartProducts());
    this.store.dispatch(getFavProducts());
  }
}
