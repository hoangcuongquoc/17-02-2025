import { Component } from '@angular/core';
import {ProductCardComponent} from "../../components/product-card/product-card.component";
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
    imports: [
        ProductCardComponent
    ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  constructor(private productService: ProductService) {
  }

  get products() {
    return this.productService.products
  }
}
