import { ListaPadrao } from 'src/app/shared/lista-padrao';
import { Component, OnInit, Injector, Input } from '@angular/core';
import { IProductType } from '../shared/type-product-interface';
import { ProductTypeService } from '../shared/product-type.service';

@Component({
  selector: 'app-product-type-list',
  templateUrl: './product-type-list.component.html',
  styleUrls: ['./product-type-list.component.scss'],
})
export class ProductTypeListComponent
  extends ListaPadrao<IProductType>
  implements OnInit
{
  constructor(
    protected injector: Injector,
    protected service: ProductTypeService
  ) {
    super(injector, service);
  }

  ngOnInit(): void {
    this.CompleteList();
  }

  editForm(id: string) {
    this.router.navigate([`productType/${id}/edit`]);
  }

  updateList() {
    this.ngOnInit();
  }
}
