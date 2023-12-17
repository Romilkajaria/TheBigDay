import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../../../../common/src/lib/common-rest-models/product";
import {Table, TableRowSelectEvent} from "primeng/table";
import {
  CommonProductsService
} from "../../../../../../../common/src/lib/common-rest-services/products/common-products-service.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {AddProductFormComponent} from "./add-product-form/add-product-form.component";
import {KeyValue} from "@angular/common";
import {Message, MessageService} from "primeng/api";


export enum ProductColumnNames {
  NAME = 'Name',
  DESCRIPTION = 'Description',
  MINGUESTLIMIT = 'Min. Guest Limit',
  MAXGUESTLIMIT = 'Max. Guest Limit',
  ISDELETED = "Disabled"
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [DialogService, MessageService],
})
export class ProductsComponent implements OnInit {
  products?: Product[];
  loading: any;
  Object = Object;
  ref = new DynamicDialogRef();
  productColumns: KeyValue<ProductColumnNames, string>[] = [
    {key: ProductColumnNames.NAME, value: 'name'},
    {key: ProductColumnNames.DESCRIPTION, value: 'description'},
    {key: ProductColumnNames.MINGUESTLIMIT, value: 'minGuestLimit'},
    {key: ProductColumnNames.MAXGUESTLIMIT, value: 'maxGuestLimit'},
    {key: ProductColumnNames.ISDELETED, value: 'isDeleted'},
  ];

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
    this.productsService.getProducts().subscribe((p: Product[]) => {
      this.products = p;
    })
  }
}

