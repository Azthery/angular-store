import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }
  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): any {
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  deleteProduct(id: string): any {
    this.productsService.deleteProduct(id);
    this.products = this.products.filter( el => {
      if (el.id === id) {
        id = undefined;
        return false;
      } else {
        return true;
      }
    });
  }
}
