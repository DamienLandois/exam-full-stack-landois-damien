import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../services/productServices';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: any[]) => {
      this.products = products;
    });
  }
}
