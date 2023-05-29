import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { initialProductsState } from './product.state';

export const productReducer = createReducer(
  initialProductsState,
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(ProductActions.addProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),
  on(ProductActions.updateProductSuccess, (state, { product }) => ({
    ...state,
    products: state.products.map((p) => (p.id === product.id ? product : p)),
  })),
  on(ProductActions.deleteProductSuccess, (state, { productId }) => ({
    ...state,
    products: state.products.filter((p) => p.id !== productId),
  })),
  on(ProductActions.addToCart, (state, { product }) => ({
    ...state,
    cart: [...state.cart, product],
  })),
  on(ProductActions.removeFromCart, (state, { productId }) => ({
    ...state,
    cart: state.cart.filter((p) => p.id !== productId),
  })),
  on(ProductActions.clearCart, (state) => ({
    ...state,
    cart: [],
  })),
  on(ProductActions.getCartProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.getCartProductsSuccess, (state, { products }) => ({
    ...state,
    cart: products,
    loading: false,
  })),
  on(ProductActions.getFavProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(ProductActions.getFavProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.getFavProductsSuccess, (state, { products }) => ({
    ...state,
    favProducts: products,
    loading: false,
  })),
  on(ProductActions.getFavProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(ProductActions.addToFav, (state, { product }) => ({
    ...state,
    favProducts: [...state.favProducts, product],
  })),
  on(ProductActions.removeFromFav, (state, { productId }) => ({
    ...state,
    favProducts: state.favProducts.filter((p) => p.id !== productId),
  }))
);
