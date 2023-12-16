import {Component, Input} from '@angular/core';
import {Product} from "../../../../../../../../common/src/lib/common-rest-models/product";
import {DialogConfig} from "@angular/cdk/dialog";
import {DynamicDialogConfig} from "primeng/dynamicdialog";

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
  providers: [DialogConfig]
})
export class AddProductFormComponent {
  @Input() product?: Product = {
    description: "",
    id: "",
    isDeleted: false,
    maxGuestLimit: 0,
    minGuestLimit: 0,
    name: "",
    vendorID: ""
  };

  constructor(private dialogConfig: DynamicDialogConfig<Product>) {
    if(dialogConfig && dialogConfig.data) {
      this.product = dialogConfig.data;
    }
  }

}
