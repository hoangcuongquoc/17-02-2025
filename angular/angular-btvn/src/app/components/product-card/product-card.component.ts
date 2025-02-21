import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {publish} from 'rxjs';
import {ProductService} from '../../services/product/product.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() name: string = "";
  @Input() price: string = "";
  @Input() image: string = "";
  @Input() id: number = 0;
 @Output() productClicked = new EventEmitter<any>();

 constructor( public productService: ProductService) {
 }
 addProductToCart() {
   this.productClicked.emit();
 }
}
