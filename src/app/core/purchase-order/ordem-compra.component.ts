import { Validators } from '@angular/forms';
import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { IClient } from './../client/client-shared/cliente-interface';
import { ClientService } from './../client/client-shared/client.service';
import { PurchaseOrderService } from './shared/purchase-order.service';
import { IPurchaseOrder } from './shared/purchase-order.interface';
import { FormularioPadrao } from 'src/app/shared/formulario-padrao';
import { SubSink } from 'subsink2';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
})
export class OrdemCompraComponent
  extends FormularioPadrao<IPurchaseOrder>
  implements OnInit, OnDestroy
{
  private subs = new SubSink();
  clientOnlyName$!: IClient[];

  typePay = [
    { typePay: 'Débito', valuePay: 'debito' },
    { typePay: 'Crédito', valuePay: 'credito' },
    { typePay: 'Dinheiro', valuePay: 'dinheiro' },
  ];

  constructor(
    protected injector: Injector,
    private service: PurchaseOrderService,
    private serviceClient: ClientService
  ) {
    super(injector, 'purchaseorder/new', service);
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      typePay: [null, Validators.required],
      _idClient: [null, Validators.required],
    });

    this.subs.sink = this.serviceClient.getByIdName().subscribe(
      (dados) => (this.clientOnlyName$ = dados),
      (erro) => console.error(erro),
      () => console.log(this.clientOnlyName$)
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
