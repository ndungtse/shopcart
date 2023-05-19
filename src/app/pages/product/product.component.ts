import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  productId: string;
  photos = new Array(4).fill(0)

  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.params['id'];
  }
}
