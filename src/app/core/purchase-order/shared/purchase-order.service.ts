import { CrudServico } from 'src/app/shared/crud-servico';
import { Injectable, Injector } from '@angular/core';
import { IPurchaseOrder } from './purchase-order.interface';

@Injectable({
  providedIn: 'root',
})
export class PurchaseOrderService extends CrudServico<IPurchaseOrder> {
  constructor(protected injector: Injector) {
    super('http://localhost:5000/purchaseorder/', injector);
  }
}
