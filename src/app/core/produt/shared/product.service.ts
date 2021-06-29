import { CrudServico } from 'src/app/shared/crud-servico';
import { Injectable, Injector } from '@angular/core';
import { IProduct } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends CrudServico<IProduct> {
  constructor(protected injector: Injector) {
    super('http://localhost:5000/product', injector);
  }
}
