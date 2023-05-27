import { Component } from '@angular/core';

@Component({
  selector: 'app-product-skeleton',
  templateUrl: './product-skeleton.component.html',
})
export class ProductSkeletonComponent {
   items: any[] = new Array(8).fill(0);
}
