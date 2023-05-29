import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as ProductActions from './product.actions';
import { ProductService } from 'src/app/services/product.service';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((products) => ProductActions.loadProductsSuccess({ products })),
          catchError((error) =>
            of(ProductActions.loadProductsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.addProduct),
      switchMap((action) =>
        this.productService.addProduct(action.product).pipe(
          map((product) => ProductActions.addProductSuccess({ product })),
          catchError((error) =>
            of(ProductActions.addProductFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // get products on cart from local storage
  getCartProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getCartProducts),
      switchMap(() =>
        this.productService.getCartProducts().pipe(
          map((products) =>
            ProductActions.getCartProductsSuccess({ products })
          ),
          catchError((error) =>
            of(ProductActions.getCartProductsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Update Product and Delete Product effects can be similarly implemented

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
