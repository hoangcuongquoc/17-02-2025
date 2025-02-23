import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://potterapi-fedeperin.vercel.app/en/books').subscribe((data: any) => {
      console.log(data);
    });
  }

  getallbooks() {
    return this.httpClient.get('https://potterapi-fedeperin.vercel.app/en/books');
  }
}
