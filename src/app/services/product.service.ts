import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../utils/types/type.1';

export interface ApiResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://ebay-scrape.onrender.com/products'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ApiResponse<Product[]>>(this.apiUrl + '/ebay/globaldeals')
      .pipe(map((res) => res.data));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http
      .get<ApiResponse<Product[]>>(
        this.apiUrl + `/ebay/globaldeals/${category}`
      )
      .pipe(map((res) => res.data));
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  deleteProduct(productId: string): Observable<void> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete<void>(url);
  }

  getProductById(productId: string): Observable<Product> {
    const url = `${this.apiUrl}/ebay/products/itm/${productId}`;
    return this.http
      .get<ApiResponse<Product>>(url)
      .pipe(map((res) => res.data));
  }
}
