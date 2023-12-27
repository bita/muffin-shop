import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductResolverService } from '../services/product-resolver.service';
import { NoProductComponent } from './no-products/no-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';
import { authGuard } from '../guard/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: NoProductComponent, pathMatch: 'full' },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: [ProductResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
