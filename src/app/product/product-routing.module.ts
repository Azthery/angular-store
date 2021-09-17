import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ProductsComponent } from './component/products/products.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

const routes: Route[] = [
    {
    path: '',
    component: ProductsComponent
    },
    {
        path: ':id',
        component: ProductDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule {}
