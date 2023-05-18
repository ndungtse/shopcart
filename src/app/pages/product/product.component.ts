import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  productId: string;

  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.params['id'];
  }
}
