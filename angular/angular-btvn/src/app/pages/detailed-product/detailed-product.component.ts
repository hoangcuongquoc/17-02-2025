import { Component } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {Product} from '../../models/product.model';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../services/cart/cart.service';


@Component({
  selector: 'app-detailed-product',
  standalone: true,
  imports: [],
  templateUrl: './detailed-product.component.html',
  styleUrl: './detailed-product.component.css'
})
export class DetailedProductComponent {
  product: Product
  constructor(private productService: ProductService,private route: ActivatedRoute, private cartService: CartService) {
    const productId = this.route.snapshot.params['id']
    this.product = this.productService.getProductById(productId)
    console.log(this.product)
  }

  addToCart(){
    console.log('add to cart')
    this.cartService.addToCart(this.product)
  }

}
