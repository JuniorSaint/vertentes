import { Injector } from '@angular/core';

import { IProductType } from './type-product-interface';
import { CrudServico } from 'src/app/shared/crud-servico';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductTypeService extends CrudServico<IProductType> {
  constructor(protected injector: Injector) {
    super('http://localhost:5000/producttype/', injector);
  }
}
