import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutRoutingModule } from './produt-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/shared/material.module';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [ProductFormComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProdutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    MaterialModule,
    CurrencyMaskModule,
  ],
})
export class ProdutModule {}
