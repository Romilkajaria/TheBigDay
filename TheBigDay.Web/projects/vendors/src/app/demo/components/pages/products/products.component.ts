import {Component, OnInit} from '@angular/core';
import {Table} from "primeng/table";
import {ItemStatus, IVendorItem, ProductType} from "./product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  representatives: any;
  statuses: any;
  activityValues: any;
  products: IVendorItem<ProductType>[] = [];
  loading: any;

  onGlobalFilter(dt1: Table, $event: Event) {

  }

  clear(dt1: Table) {

  }

  ngOnInit(): void {
    this.products = [{
      id: 0,
      name: "something",
      description: "something Description",
      type: ProductType.Catering,
      minGuestLimit: 1,
      maxGuestLimit: 10,
      status: ItemStatus.Active
    }]
  }
}
