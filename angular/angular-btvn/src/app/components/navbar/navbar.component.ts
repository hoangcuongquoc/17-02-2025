import {Component, Input, OnInit, Output} from '@angular/core';
import {OverplayNavComponent} from './nav-components/overplay-nav/overplay-nav.component';
import {MatIcon} from '@angular/material/icon';
import {MatBadge} from '@angular/material/badge';
import {CartService} from '../../services/cart/cart.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    OverplayNavComponent,
    MatIcon,
    MatBadge,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  totalItems  = 0;
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.totalItems = this.cartService.countCartItems()
    this.cartService.cartUpdated.subscribe(count => {
      this.totalItems = count;
    });
    console.log(this.totalItems)
  }

}
