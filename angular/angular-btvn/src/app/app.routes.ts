import { Routes } from '@angular/router';
import {ProductPageComponent} from './pages/product-page/product-page.component';
import {DetailedProductComponent} from './pages/detailed-product/detailed-product.component';
import {HappychickenComponent} from './pages/happychicken-page/happychicken/happychicken.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductPageComponent
  },
  {
    path: 'product/:id',
    component: DetailedProductComponent
  },
  {
    path: 'ga-gion-vui-ve',
    component: HappychickenComponent
  }
];
