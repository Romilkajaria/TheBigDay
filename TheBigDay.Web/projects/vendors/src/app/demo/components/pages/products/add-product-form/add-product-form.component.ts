import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../../../../../../common/src/lib/common-rest-models/product";
import {DialogConfig} from "@angular/cdk/dialog";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {
  CommonProductsService
} from "../../../../../../../../common/src/lib/common-rest-services/products/common-products-service.service";

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
  providers: [DialogConfig]
})
export class AddProductFormComponent {
  product: Product = {
    description: "",
    id: "",
    isDeleted: false,
    maxGuestLimit: 0,
    minGuestLimit: 0,
    name: "",
    vendorID: ""
  };
  @Output() onClose = new EventEmitter<void>();

  constructor(private dialogConfig: DynamicDialogConfig<Product>,
              private productService: CommonProductsService,
              private ref: DynamicDialogRef,
              ) {
    if(dialogConfig && dialogConfig.data) {
      this.product = dialogConfig.data;
    }
  }

  save() {
    if(this.product.id) {
      this.productService.updateProduct(this.product).subscribe(() => {
        this.close();
      });
    } else {
      this.productService.addProduct(this.product).subscribe(() => {
        this.close();
      });
    }

  }

  close() {
    this.ref.close()
  }
}
