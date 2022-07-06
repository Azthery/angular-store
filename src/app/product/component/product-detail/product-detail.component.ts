  // tslint:disable: typedef
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;
  public stars: Array<any>;

  constructor(
     private route: ActivatedRoute,
     private productsService: ProductsService
     ) { }

  ngOnInit(): any {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      this.getStars();
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
      .subscribe( product => {
        this.product = product;
      });
  }

  getRandomNum(min:number, max:number): number {
    max = max + 1;
    return Math.floor((Math.random() * (max - min) + min));
  }

  getStars(): void{
    const numStar = this.getRandomNum(1, 5);
    let stars = new Array(5);
    stars = stars.fill(true);
    stars = stars.fill(false, numStar);

    this.stars = stars;
  }
}
