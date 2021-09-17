import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFountComponent} from './component/page-no-fount/page-not-fount.component';

import { PageNotFountRoutingModule } from './page-not-fount-routing.module';

import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    PageNotFountComponent
  ],
  imports: [
    PageNotFountRoutingModule,
    CommonModule,
    MaterialModule
  ]
})
export class PageNotFountModule { }
