import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { ListaPadrao } from 'src/app/shared/lista-padrao';
import { IProduct } from './../shared/product.interface';
import { IPadrao } from 'src/app/shared/interface-padrao';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent
  extends ListaPadrao<IPadrao>
  implements OnInit, OnDestroy
{
  virtualProducts$!: Observable<IProduct[]>;
  subscription!: Subscription;
  searchInputTerm: Subject<string> = new Subject<string>();

  constructor(protected injector: Injector, protected service: ProductService) {
    super(injector, service);
  }

  ngOnInit(): void {
    // this.virtualProducts$ = this.searchInputTerm.pipe(
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   switchMap((termo: string) => {
    //     return this.service.getBySearch(termo);
    //   })
    // );
    // this.subscription = this.virtualProducts$.subscribe(
    //   (dados) => (this.dataSource$ = dados),
    //   (error) => console.error(error),
    //   () => console.log(this.dataSource$)
    // );
    this.subscription = this.service
      .get()
      .subscribe((dados) => (this.dataSource$ = dados));
  }

  search(searchText: string) {
    this.searchInputTerm.next(searchText);
  }

  edit(id: any): void {
    this.router.navigate([`product/${id}/edit`]);
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  refreshPage() {
    this.ngOnInit();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
