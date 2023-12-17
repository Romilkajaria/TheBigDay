import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../../../../common/src/lib/common-rest-models/product";
import {Table, TableRowSelectEvent} from "primeng/table";
import {
  CommonProductsService
} from "../../../../../../../common/src/lib/common-rest-services/products/common-products-service.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {AddProductFormComponent} from "./add-product-form/add-product-form.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [DialogService],
})
export class ProductsComponent implements OnInit {
  products?: Product[];
  loading: any;
  Object = Object;
  ref = new DynamicDialogRef();

  constructor(private productsService: CommonProductsService,
              private dialogService: DialogService) {
  }
  ngOnInit(): void {
    this.updateData();
    this.ref.onClose.subscribe(() =>     this.updateData());
  }

  onGlobalFilter(dt1: Table, $event: Event) {

  }

  createProduct() {
    this.dialogService.open(AddProductFormComponent, {header: 'Add new product', width: '50rem', maximizable: true, });

  }

  onRowSelect($event: TableRowSelectEvent) {
    this.dialogService.open(AddProductFormComponent, {header: 'Edit: ' + $event.data.name, data: $event.data as Product, width: '50rem', maximizable: true})
  }

  private updateData() {
    this.productsService.getProducts().subscribe((p: Product[]) => this.products = p)
  }
}
