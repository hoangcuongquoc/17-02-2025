import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ProductService} from './services/product/product.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ProductCardComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-btvn';
  constructor() {
  }


  // total = 0;
  // products: any;
  // addProductToCart() {
  //   console.log('Add product to cart');
  //   this.total += 1;
  // }
}

