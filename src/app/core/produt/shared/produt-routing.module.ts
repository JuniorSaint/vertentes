import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './../product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from '../product-form/product-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    data: { Title: 'Lista de Produtos' },
  },
  {
    path: 'new',
    component: ProductFormComponent,
    data: { Title: 'Cadastro de Produtos' },
  },
  {
    path: ':id/edit',
    component: ProductFormComponent,
    data: { Title: 'Atualizando Produto' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutRoutingModule {}
