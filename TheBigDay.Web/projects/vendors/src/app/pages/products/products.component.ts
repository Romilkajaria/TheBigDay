import {Component, Input, OnInit} from '@angular/core';
import {TableRowSelectEvent} from "primeng/table";
import {
  CommonProductsService
} from "../../../../../common/src/lib/common-rest-services/products/common-products-service.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {AddProductFormComponent} from "./add-product-form/add-product-form.component";
import {Message, MessageService} from "primeng/api";
import {TBDItemColumnMap, TBDItemColumnNames} from "../../../../../common/src/lib/helpers/tbd-item-table-column";
import {getToastMessage, ToastMessageType} from "../../../../../common/src/lib/helpers/toastMessages";
import {AuthorizeService} from "../../../../../common/src/lib/components/auth/login/authorize.service";
import {FormEntry} from "../../../../../common/src/lib/common-rest-models/form-entry";
import {Store} from "../../../../../common/src/lib/common-rest-models/store";
import {FormService} from "../../../../../common/src/lib/common-rest-models/Form/form.service";
import {ItemCategory} from "../../../../../common/src/lib/common-rest-models/item-category";
import {ItemCategoryService} from "../../../../../common/src/lib/common-rest-services/item-category.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [DialogService, MessageService],
})
export class ProductsComponent implements OnInit {
    @Input() store: Store | undefined;
    @Input() categoryId!: string;
    itemCategory?: ItemCategory;
  products?: FormEntry[];
  loading: boolean = true;
  ref = new DynamicDialogRef();
  ProductColumnNames = TBDItemColumnNames
  productColumns = TBDItemColumnMap

  constructor(private productsService: CommonProductsService,
              private dialogService: DialogService,
              private messageService: MessageService,
              private formService: FormService,
              public auth: AuthorizeService,
              private itemCategoryService: ItemCategoryService) {
  }
  ngOnInit(): void {
      this.itemCategoryService.getCategories().subscribe(
          (ic) => this.itemCategory = ic.find((i) => i.id === this.categoryId));
      this.updateData();
  }

  createProduct() {
    this.ref = this.dialogService.open(AddProductFormComponent, {header: `New ${this.itemCategory ? this.itemCategory.name.toLowerCase() : ''} product`, width: '50rem', maximizable: true, });
    this.onCloseSubscribe();
  }

  onRowSelect($event: TableRowSelectEvent) {
    this.ref = this.dialogService.open(AddProductFormComponent, {header: 'Edit: ' + $event.data.name, data: $event.data as FormEntry, width: '50rem', maximizable: true})
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
      next: (p: FormEntry[]) => {
        this.loading = false
        this.products = p;
      },
      error: (e) => this.messageService.add(getToastMessage(ToastMessageType.ERROR, e.message)),
    })
  }
}

