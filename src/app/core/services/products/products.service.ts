import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }


  getAllProducts(): any {
    return this.http.get <Product[]>(`${environment.url_api}/products`);
  }
  getProduct(id: string): any {
    return this.http.get <Product>(`${environment.url_api}/products/${id}`);
  }
  createProduct(product: Product): any {
    return this.http.post(`${environment.url_api}/products`, product);
  }
  updateProduct(id: string, changes: Partial<Product>): any {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }
  deleteProduct(id: string): any {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
