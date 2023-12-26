import {Component, OnInit} from '@angular/core';
import {PriceType, priceTypeLabelMap, Product} from "../../../../../../../common/src/lib/common-rest-models/product";
import {Table, TableRowSelectEvent} from "primeng/table";
import {
  CommonProductsService
} from "../../../../../../../common/src/lib/common-rest-services/products/common-products-service.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {AddProductFormComponent} from "./add-product-form/add-product-form.component";
import {KeyValue} from "@angular/common";
import {Message, MessageService} from "primeng/api";
import {FormControl, NgControl} from "@angular/forms";


export enum ProductColumnNames {
  NAME = 'Name',
  DESCRIPTION = 'Description',
  MIN_GUEST_LIMIT = 'Min. Guest Limit',
  MAX_GUEST_LIMIT = 'Max. Guest Limit',
  IS_DELETED = "Disabled",
  PRICE = "Price",
  PRICE_TYPE = 'Price Type'
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [DialogService, MessageService, FormControl],
})
export class ProductsComponent implements OnInit {
  products?: Product[];
  loading: boolean = true;
  ref = new DynamicDialogRef();
  ProductColumnNames = ProductColumnNames
  productColumns: KeyValue<ProductColumnNames, string>[] = [
    {key: ProductColumnNames.NAME, value: 'name'},
    {key: ProductColumnNames.MIN_GUEST_LIMIT, value: 'minGuestLimit'},
    {key: ProductColumnNames.MAX_GUEST_LIMIT, value: 'maxGuestLimit'},
    {key: ProductColumnNames.IS_DELETED, value: 'isDeleted'},
    {key: ProductColumnNames.PRICE, value: 'price'},
    {key: ProductColumnNames.PRICE_TYPE, value: 'priceType'}
  ];
  priceTypeLabelMap = priceTypeLabelMap;
  formGroup: any;

  constructor(private productsService: CommonProductsService,
              private dialogService: DialogService,
              private messageService: MessageService) {
  }
  ngOnInit(): void {
    this.updateData();

  }

  onGlobalFilter(dt1: Table, $event: Event) {

  }

  createProduct() {
    this.ref = this.dialogService.open(AddProductFormComponent, {header: 'Add new product', width: '50rem', maximizable: true, });
    this.onCloseSubscribe();
  }

  onRowSelect($event: TableRowSelectEvent) {
    this.ref = this.dialogService.open(AddProductFormComponent, {header: 'Edit: ' + $event.data.name, data: $event.data as Product, width: '50rem', maximizable: true})
    this.onCloseSubscribe();
  }

  onCloseSubscribe() {
    this.ref.onClose.subscribe((toastMessage: Message) => {
      if(toastMessage) {
        this.messageService.add(toastMessage);
        this.updateData();
      }
    });
  }

  private updateData() {
    this.loading = true;
    this.productsService.getProducts().subscribe({
      next: (p: Product[]) => {
        this.loading = false
        this.products = p;
      },
      error: (e) => this.messageService.add({data: e, sticky: true}),
    })
  }

  getPriceTypeCellData(rowDatum: PriceType) {
    return priceTypeLabelMap[rowDatum];
  }
}

