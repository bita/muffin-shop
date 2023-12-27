import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from '../model/product.model';
import { DataStorageService } from './data-storage.service';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<Product[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private productService: ProductService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    const products = this.productService.getProducts();
    if (products.length === 0) {
      return this.dataStorageService.fetchProducts();
    }
  }
}

interface Resolve<T> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<T> | Promise<T> | T;
}
