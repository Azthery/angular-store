import { Component, OnInit } from '@angular/core';

import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit {

  public product!: Product;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addCart(): any{
    this.cartService.addCart(this.product);
  }
}
