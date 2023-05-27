import { Product } from "src/app/utils/types/type.1";

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  cart: Product[];
}

export const initialProductsState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  cart: [],
};
