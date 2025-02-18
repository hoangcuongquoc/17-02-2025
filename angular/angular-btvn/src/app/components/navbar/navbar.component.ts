import { Component } from '@angular/core';
import {OverplayNavComponent} from './nav-components/overplay-nav/overplay-nav.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    OverplayNavComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
