import { Product } from "src/app/utils/types/type.1";

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  cart: Product[];
}

const products = [
  {
    name: 'Product 1',
    price: 100,
    description:
      'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/200x150',
  },
  {
    name: 'Product 2',
    price: 150,
    description:
      'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/200x150',
  },
];

export const initialProductsState: ProductsState = {
  products: products,
  loading: false,
  error: null,
  cart: [],
};
