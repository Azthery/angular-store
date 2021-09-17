import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './components/demo/demo.component';

import { DemoRoutingModule } from './demo-routong.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    DemoRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class DemoModule { }
