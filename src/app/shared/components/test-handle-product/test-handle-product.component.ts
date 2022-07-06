import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-test-handle-product',
  templateUrl: './test-handle-product.component.html',
  styleUrls: ['./test-handle-product.component.scss']
})
export class TestHandleProductComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  // crear producto
  createProduct() {
    const newProduct: Product = {
      id: '123',
      title: 'EL Homero-Móvil',
      image: 'https://pbs.twimg.com/media/Eegm5L0XoAErTRE.jpg',
      price: 82000,
      description: `Toda mi vida he buscado un auto donde me sienta vivo,
      poderso como gorila pero suave y comodo como una nube,
      ¡ahora al fin lo he encontrado!.
      Homero!, el auto para Homero`
    };
    this.productsService.createProduct(newProduct)
      .subscribe( product => {
        console.log(product);
      });
  }

  // actualizar producto
  updateProduct() {
    const updateProduct: Partial<Product> = {
      image: 'https://miro.medium.com/max/960/0*TdZODGTh_LAA3v--.gif',
      price: 82001,
    };
    this.productsService.updateProduct('123', updateProduct)
      .subscribe( product => {
        console.log(product);
      });
  }

  // eliminar producto
  deleteProduct(){
    this.productsService.deleteProduct('123')
      .subscribe( res => {
        console.log(res);
      });
  }

}
