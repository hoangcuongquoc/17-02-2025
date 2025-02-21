import {EventEmitter, Injectable} from '@angular/core';
import {Product} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];
  cartUpdated = new EventEmitter<number>();

  constructor() { }

  addToCart(product: Product){
    this.products.push(product);
    this.cartUpdated.emit(this.products.length);
  }

  countCartItems(){
    console.log(this.products.length)
    return this.products.length;
  }
}
