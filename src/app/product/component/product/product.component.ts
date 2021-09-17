import {
    Component,
    Input, Output,
    EventEmitter,
} from '@angular/core';

import { Product } from '../../../core/models/product.model';

import { CartService } from '../../../core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls:  ['./product.component.scss']
})
export class ProductComponent  {

    @Input()
    product!: Product;
    @Output() productClicked: EventEmitter <any> = new EventEmitter();  // usamos <> para typar el EventEmitter
                                                                        // podemos agregar un valor iniciar como parametro

    today = new Date();

    constructor(
        private cartService: CartService,
    ){

    }

    addCart(): any{
        this.cartService.addCart(this.product);
        // this.productClicked.emit(this.product.id);
        // Del  typado en <> del EventEmitter, dependera el typado del parametro
    }
}
