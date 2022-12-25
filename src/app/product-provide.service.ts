import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductProvideService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<
      { id: number, name: string, price: number, description: string }[]
    >('/assets/products.json');
  }
}
