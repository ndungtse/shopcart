import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/utils/types/type.1';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  productId: string;
  photos = new Array(4).fill(0);
  product: Product | null = null;
  loading: boolean = true;
  error: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productId = this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe({
      next: (product) => {
        this.product = product;
        this.loading = false;
        this.error = null;
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
        this.error = 'error fetching product';
      },
    });
  }
}
