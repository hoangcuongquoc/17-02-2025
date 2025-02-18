import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductCardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-btvn';
  items = [
    {
      name: 'Cùng Bee Mix & Match 2',
      price: "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/i/hinh_combo-03.png'
    },
    {
      name: 'Cùng Bee Mix & Match 4',
      price: "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/i/hinh_combo-03.png'
    },
    {
      name: 'Cùng Bee Mix & Match 1',
      price: "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/i/hinh_combo-01.png'
    },
    {
      name: 'Cùng Bee Mix & Match 3',
      price: "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/i/hinh_combo-04.png'
    },
    {
      name: 'Combo Một Mình Ăn Ngon',
      price:  "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_1.png'
    },
    {
      name: 'Cặp đôi ăn ý',
      price: "185.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_2_2__1.png'
    },
    {
      name: 'Combo Cả Nhà No Nê',
      price: "185.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_3.png'
    },
    {
      name: 'Combo Bạn Bè Tụ Tậ',
      price: "322.000" ,
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_4_2.png'
    },
    ]
}
