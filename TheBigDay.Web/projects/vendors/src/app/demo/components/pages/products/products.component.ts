import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../../../../common/src/lib/common-rest-models/product";
import {Table} from "primeng/table";
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
  ref: DynamicDialogRef | undefined;

  constructor(private productsService: CommonProductsService,
              private dialogService: DialogService) {
  }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((p: Product[]) => this.products = p)
  }

  onGlobalFilter(dt1: Table, $event: Event) {

  }

  createProduct() {
    this.dialogService.open(AddProductFormComponent, {header: 'Add Product'});
  }
}
