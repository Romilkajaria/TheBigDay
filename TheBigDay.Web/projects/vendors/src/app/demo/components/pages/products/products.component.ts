import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../../../../common/src/lib/common-rest-models/product";
import {Table} from "primeng/table";
import {
  CommonProductsService
} from "../../../../../../../common/src/lib/common-rest-services/products/common-products-service.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  representatives: any;
  statuses: any;
  activityValues: any;
  products: Product[] = [];
  loading: any;
  Object = Object;

  constructor(private productsService: CommonProductsService) {
  }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((p: Product[]) => this.products = p)
  }

  onGlobalFilter(dt1: Table, $event: Event) {

  }
}
