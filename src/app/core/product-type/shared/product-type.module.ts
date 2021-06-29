import { PrimengModule } from './../../../shared/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductTypeListComponent } from '../product-type-list/product-type-list.component';
import { ProductTypeFormComponent } from '../product-type-form/product-type-form.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProducTypeRoutingModule } from './product-type-routing.module';

@NgModule({
  declarations: [ProductTypeFormComponent, ProductTypeListComponent],
  imports: [
    CommonModule,
    ProducTypeRoutingModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductTypeModule {}
