import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductFormComponent } from '../../produt/product-form/product-form.component';
import { ProductTypeFormComponent } from '../product-type-form/product-type-form.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductTypeFormComponent,
    data: { Title: 'Tipo de Produto ' },
  },
  {
    path: 'new',
    component: ProductTypeFormComponent,
    data: { Title: 'Cadastro de tipo' },
  },
  {
    path: ':id/edit',
    component: ProductTypeFormComponent,
    data: { Title: 'Atualizando tipo' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducTypeRoutingModule {}
