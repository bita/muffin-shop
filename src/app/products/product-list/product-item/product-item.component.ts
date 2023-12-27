import { Component, Input } from '@angular/core';
import { Product } from '../../../model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product: Product;
  @Input() i: number;
  constructor() {}
}
