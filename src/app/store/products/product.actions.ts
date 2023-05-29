import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/utils/types/type.1';

// Load Products
export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: string }>()
);

// Add Product
export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);
export const addProductSuccess = createAction(
  '[Product] Add Product Success',
  props<{ product: Product }>()
);
export const addProductFailure = createAction(
  '[Product] Add Product Failure',
  props<{ error: string }>()
);

// Update Product
export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);
export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ product: Product }>()
);
export const updateProductFailure = createAction(
  '[Product] Update Product Failure',
  props<{ error: string }>()
);

// Delete Product
export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ productId: string }>()
);
export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{ productId: string }>()
);
export const deleteProductFailure = createAction(
  '[Product] Delete Product Failure',
  props<{ error: string }>()
);

// Products on cart
export const addToCart = createAction(
  '[Product] Add To Cart',
  props<{ product: Product }>()
);
export const removeFromCart = createAction(
  '[Product] Remove From Cart',
  props<{ productId: string }>()
);
export const clearCart = createAction('[Product] Clear Cart');

// get cart products from localstorage
export const getCartProducts = createAction('[Product] Get Cart Products');
export const getCartProductsSuccess = createAction(
  '[Product] Get Cart Products Success',
  props<{ products: Product[] }>()
);
export const getCartProductsFailure = createAction(
  '[Product] Get Cart Products Failure',
  props<{ error: string }>()
);
export const addToFav = createAction(
  '[Product] Add To Fav',
  props<{ product: Product }>()
);
export const removeFromFav = createAction(
  '[Product] Remove From Fav',
  props<{ productId: string }>()
);
export const clearFav = createAction('[Product] Clear Fav');
export const getFavProducts = createAction('[Product] Get Fav Products');
export const getFavProductsSuccess = createAction(
  '[Product] Get Fav Products Success',
  props<{ products: Product[] }>()
);
export const getFavProductsFailure = createAction(
  '[Product] Get Fav Products Failure',
  props<{ error: string }>()
);
