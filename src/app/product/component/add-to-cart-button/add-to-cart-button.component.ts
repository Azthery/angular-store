import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss']
})
export class AddToCartButtonComponent implements OnInit {
  
  @Input() product!: Product;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  
  addCart(): any{
    this.cartService.addCart(this.product);
}

}
