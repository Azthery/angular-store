  // tslint:disable: typedef
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;

  constructor(
     private route: ActivatedRoute,
     private productsService: ProductsService
     ) { }

  ngOnInit(): any {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
      .subscribe( product => {
        this.product = product;
      });
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
