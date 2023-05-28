import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/utils/types/type.1';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
})
export class ProductsCategoryComponent implements OnInit {
  category: string;
  products: Product[] = [];
  loading: boolean = true;
  error?: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.category = this.route.snapshot.params['category'];
  }

  ngOnInit(): void {
    this.productService.getProductsByCategory(this.category).subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
        this.error = '';
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
        this.error = 'error fetching products';
      },
    });
  }
}
