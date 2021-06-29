import { IProduct } from './../produt/shared/product.interface';
import { ProductService } from './../produt/shared/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  activeID!: string;
  product!: IProduct;

  constructor(private route: ActivatedRoute, private service: ProductService) {}

  ngOnInit(): void {
    this.activeID = this.route.snapshot.params['id'];
    this.service
      .getByID(this.activeID)
      .subscribe((dado) => (this.product = dado));
  }
}
