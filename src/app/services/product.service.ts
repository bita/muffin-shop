import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productChanged = new Subject<Product[]>();
  private products: Product[] = [];

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }

  setProducts(products: Product[]) {
    this.products = products;
    this.productChanged.next(this.products.slice());
  }
  constructor() {}
}
