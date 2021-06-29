import { IProductType } from './../shared/type-product-interface';
import { FormularioPadrao } from 'src/app/shared/formulario-padrao';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { ProductTypeService } from '../shared/product-type.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-product-type-form',
  templateUrl: './product-type-form.component.html',
  styleUrls: ['./product-type-form.component.scss'],
})
export class ProductTypeFormComponent
  extends FormularioPadrao<IProductType>
  implements OnInit
{
  // @ViewChild(TypeServiceListComponent) listComponent!: TypeServiceListComponent;
  formUpdate!: IProductType;

  constructor(
    protected injector: Injector,
    protected service: ProductTypeService
  ) {
    super(injector, 'productType/new', service);
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      _id: [null],
      productType: [null, Validators.required],
    });

    this.popularForm();
  }

  popularForm() {
    if (this.urlAtiva !== 'new') {
      this.servico.getByID(this.urlAtiva).subscribe(
        (dados) => (this.formUpdate = dados),
        (error) => console.log(error),
        () => {
          this.patchFormUpdate(this.formUpdate);
        }
      );
    }
  }

  patchFormUpdate(formUpdate: IProductType) {
    this.formulario.patchValue({
      _id: this.formUpdate._id,
      productType: this.formUpdate.productType,
    });
  }
}
