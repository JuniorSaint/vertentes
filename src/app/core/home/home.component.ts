import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../produt/shared/product.service';
import { IProduct } from '../produt/shared/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  productList$!: IProduct[];
  subscription!: Subscription;

  sortOrder!: number;

  sortField!: string;

  constructor(private service: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.service
      .get()
      .subscribe((prod) => (this.productList$ = prod));
  }

  detailProduct(_id: any) {
    this.router.navigate([`detail/${_id}`]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
