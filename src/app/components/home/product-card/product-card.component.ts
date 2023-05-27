import { Component, Input } from '@angular/core';
import { Product } from 'src/app/utils/types/type.1';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product: Product | null = null;
}
