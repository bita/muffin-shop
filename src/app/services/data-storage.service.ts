import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Subject, map, tap } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  error = new Subject<string>();
  products: Product[];
  product: Product;
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  fetchProducts() {
    return this.http
      .get<Product[]>(
        'https://angular-bb68f-default-rtdb.europe-west1.firebasedatabase.app/product.json'
      )
      .pipe(
        map((products) => {
          return products.map((product) => {
            return {
              ...product,
            };
          });
        }),
        tap((products: Product[]) => {
          this.productService.setProducts(products);
        })
      );
  }
}
