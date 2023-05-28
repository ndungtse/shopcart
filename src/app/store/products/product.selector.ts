import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './product.state';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(
  selectProductsState,
  (state) => state.products
);
// export const selectProducts = createSelector(
//   selectProductsState,
//   (state) => state.products
// );
export const selectLoading = createSelector(
  selectProductsState,
  (state) => state.loading
);

export const selectOnCart = createSelector(
  selectProductsState,
  (state) => state.cart
);
export const selectError = createSelector(
  selectProductsState,
  (state) => state.error
);
