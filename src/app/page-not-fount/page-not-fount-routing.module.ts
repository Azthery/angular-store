import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { PageNotFountComponent } from './component/page-no-fount/page-not-fount.component';

const routes: Route[] = [{
    path: '',
    component: PageNotFountComponent
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class PageNotFountRoutingModule { }
