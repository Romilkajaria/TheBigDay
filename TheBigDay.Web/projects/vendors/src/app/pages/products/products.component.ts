import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../../common/src/lib/common-rest-models/product";
import {Table, TableRowSelectEvent} from "primeng/table";
import {
  CommonProductsService
} from "../../../../../common/src/lib/common-rest-services/products/common-products-service.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {AddProductFormComponent} from "./add-product-form/add-product-form.component";
import {Message, MessageService} from "primeng/api";
import {FormControl} from "@angular/forms";
import {TBDItemColumnMap, TBDItemColumnNames} from "../../../../../common/src/lib/helpers/tbd-item-table-column";
import {GetPriceTypeCellData} from "../../../../../common/src/lib/helpers/page-helpers";
import {getToastMessage, ToastMessageType} from "../../../../../common/src/lib/helpers/toastMessages";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [DialogService, MessageService],
})
export class ProductsComponent implements OnInit {
  products?: Product[];
  loading: boolean = true;
  ref = new DynamicDialogRef();
  ProductColumnNames = TBDItemColumnNames
  productColumns = TBDItemColumnMap
  getPriceTypeCellData = GetPriceTypeCellData;

  constructor(private productsService: CommonProductsService,
              private dialogService: DialogService,
              private messageService: MessageService) {
  }
  ngOnInit(): void {
    this.updateData();

  }

  createProduct() {
    this.ref = this.dialogService.open(AddProductFormComponent, {header: 'New product', width: '50rem', maximizable: true, });
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
      error: (e) => this.messageService.add(getToastMessage(ToastMessageType.ERROR, e.message)),
    })
  }
}

