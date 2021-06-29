import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { FormularioPadrao } from 'src/app/shared/formulario-padrao';
import { IProduct } from '../shared/product.interface';
import { ProductService } from '../shared/product.service';
import { Validators } from '@angular/forms';
import { ProductTypeService } from '../../product-type/shared/product-type.service';
import { IProductType } from '../../product-type/shared/type-product-interface';
import { SubSink } from 'subsink2';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent
  extends FormularioPadrao<IProduct>
  implements OnInit, OnDestroy
{
  formUpdate!: IProduct;
  private sub = new SubSink();
  productType$!: IProductType[];

  constructor(
    protected injector: Injector,
    private service: ProductService,
    private serviceType: ProductTypeService
  ) {
    super(injector, 'product', service);
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      _id: [''],
      code: ['', Validators.required],
      productName: ['', Validators.required],
      description: [''],
      price: [, Validators.required],
      priceOff: [''],
      isOnSale: [false, Validators.required],
      typeProduct: ['tipo padrão até arrumar'],
      isActive: [true, Validators.required],
      brand: ['', Validators.required],
      imgPath: ['', Validators.required],
    });

    this.popularForm();
    this.sub.sink = this.serviceType
      .get()
      .subscribe((dados) => (this.productType$ = dados));
  }

  popularForm() {
    if (this.urlAtiva !== 'new') {
      this.service.getByID(this.urlAtiva).subscribe(
        (dados) => {
          (this.formUpdate = dados), console.log(dados);
        },
        (error) => console.log(error),
        () => {
          this.patchFormUpdate(this.formUpdate);
        }
      );
    }
  }

  patchFormUpdate(formUpdate: IProduct) {
    this.formulario.patchValue({
      _id: formUpdate._id,
      code: formUpdate.code,
      productName: formUpdate.productName,
      description: formUpdate.description,
      price: formUpdate.price,
      priceOff: formUpdate.priceOff,
      isOnSale: formUpdate.isOnSale,
      typeProduct: formUpdate.typeProduct,
      isActive: formUpdate.isActive,
      brand: formUpdate.brand,
      imgPath: formUpdate.imgPath,
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
