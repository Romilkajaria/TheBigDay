import {Component, EventEmitter, Output} from '@angular/core';
import {PriceType, priceTypeLabelMap, Product} from "../../../../../../../../common/src/lib/common-rest-models/product";
import {DialogConfig} from "@angular/cdk/dialog";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {
  CommonProductsService
} from "../../../../../../../../common/src/lib/common-rest-services/products/common-products-service.service";
import {Message, MessageService} from "primeng/api";
import {getToastMessage, ToastMessageType} from "../../../../../../../../common/src/lib/helpers/toastMessages";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
  providers: [DialogConfig, MessageService]
})
export class AddProductFormComponent {
  product: Product = {
    description: "",
    id: undefined,
    isDeleted: false,
    maxGuestLimit: 0,
    minGuestLimit: 0,
    name: "",
    vendorID: "00000000-0000-0000-0000-000000000000",
    packageProducts: undefined,
    eventProducts: undefined,
    price: 0,
    priceType: PriceType.FLAT
  };
  @Output() onClose = new EventEmitter<void>();
  private loading = false;
  priceTypeOptions: KeyValue<PriceType, string>[] = [{
    key: PriceType.PER_PERSON, value: priceTypeLabelMap[PriceType.PER_PERSON]
  }, {
    key: PriceType.FLAT, value: priceTypeLabelMap[PriceType.FLAT]
  }]

  constructor(private dialogConfig: DynamicDialogConfig<Product>,
              private productService: CommonProductsService,
              private ref: DynamicDialogRef,
              private messageService: MessageService,
              ) {
    if(dialogConfig && dialogConfig.data) {
      this.product = dialogConfig.data;
    }
  }

  save() {
    this.loading = true;
    if (this.product.id) {
      this.productService.updateProduct(this.product).subscribe({
        next: () => {
          this.confirmation("product updated");
        },
        error: (er) => {
          this.confirmation("failed to add product" + er.error, true);
        }
      });
    } else {
      this.productService.addProduct(this.product).subscribe({
        next: () => {
          this.confirmation("product added");
        },
        error: (er) => {
          this.confirmation("failed to add product" + er.error, true);
        },
      })
    }
  }

  confirmation(toastMessage: string, failed = false) {
    this.loading = false;
    if(failed) {
      this.messageService.add(getToastMessage(ToastMessageType.ERROR, toastMessage));
    } else {
      this.close(getToastMessage(ToastMessageType.SUCCESS, toastMessage));
    }
  }

  close(toastMessage?: Message) {
    this.ref.close(toastMessage);
  }

  onPriceTypeChanged($event: KeyValue<PriceType, string>) {
    this.product.priceType = $event.key;
  }
}

//
// .subscribe(next: () => {
//   this.loading = false;
//   this.close();
// },
//   error: (er) =>);
// }
