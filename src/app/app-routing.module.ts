import { NgModule } from '@angular/core';
import { OrdemCompraComponent } from './core/purchase-order/ordem-compra.component';
import { ProductDetailComponent } from './core/product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./core/produt/shared/produt.module').then(
        (mod) => mod.ProdutModule
      ),
  },
  {
    path: 'productType',
    loadChildren: () =>
      import('./core/product-type/shared/product-type.module').then(
        (mod) => mod.ProductTypeModule
      ),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./core/client/client-shared/client.module').then(
        (mod) => mod.ClientModule
      ),
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
    data: { Title: 'Detalhes do Produto' },
  },
  {
    path: 'purchaseorder/new',
    component: OrdemCompraComponent,
    data: { Title: 'Ordem de compra' },
  },

  { path: 'home', component: HomeComponent, data: { Title: 'Home' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
