import {
    Component,
    Input, Output,
    EventEmitter,
} from '@angular/core';

import { Product } from '../../../core/models/product.model';


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

    constructor(
    ){

    }
}
