import { Component } from '@angular/core';
// @ts-ignore
import { BookServicesService } from '../services/book-services.service'; // Adjust the path as necessary

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private bookServices: BookServicesService) {
    this.bookServices.getBooks().subscribe((data: any) => {
      console.log(data);
    });
  }
}
