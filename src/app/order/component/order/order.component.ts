import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;
  productList$: Observable<Product[]>;

  constructor(
    private cartService: CartService,
  ) {
    this.productList$ = this.cartService.cart$;

    // this.productList$ = this.cartService.cart$
    //   .pipe(
    //     map( products => [...new Set(products)])
    //   );
   }

  ngOnInit(): void {
  }
}
