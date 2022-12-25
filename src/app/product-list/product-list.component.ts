import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductProvideService } from '../product-provide.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<{id:number,name:string,price:number,description:string}[]>;
  constructor(private pps: ProductProvideService) { }

  ngOnInit(): void {
     this.products = this.pps.getAllProducts();
  }

}