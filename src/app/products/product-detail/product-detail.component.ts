import { Component } from '@angular/core';
import { Product } from '../../model/product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  theProduct: Product;
  id: number;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.theProduct = this.productService.getProduct(this.id);
    });
  }
}
