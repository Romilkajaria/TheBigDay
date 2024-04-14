import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../../../../../common/src/lib/common-rest-models/product";
import {DialogConfig} from "@angular/cdk/dialog";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {
    CommonProductsService
} from "../../../../../../common/src/lib/common-rest-services/products/common-products-service.service";
import {ConfirmationService, Message, MessageService} from "primeng/api";
import {getToastMessage, ToastMessageType} from "../../../../../../common/src/lib/helpers/toastMessages";
import {KeyValue} from "@angular/common";
import {PriceType, priceTypeLabelMap} from "../../../../../../common/src/lib/common-rest-models/item";
import {DialogPriceTypeOptions} from "../../../../../../common/src/lib/helpers/page-helpers";
import {AuthorizeService} from "../../../../../../common/src/lib/components/auth/login/authorize.service";

@Component({
    selector: 'app-add-product-form',
    templateUrl: './add-product-form.component.html',
    styleUrls: ['./add-product-form.component.scss'],
    providers: [DialogConfig, MessageService, ConfirmationService]
})
export class AddProductFormComponent implements OnInit{
    product: Product = {
        description: "",
        id: undefined,
        isDeleted: false,
        maxGuestLimit: 0,
        minGuestLimit: 0,
        name: "",
        storeId: "",
        packageProducts: undefined,
        eventProducts: undefined,
        price: 0,
        priceType: PriceType.FLAT
    };
    @Output() onClose = new EventEmitter<void>();
    loading = false;
    priceTypeOptions = DialogPriceTypeOptions

    constructor(private dialogConfig: DynamicDialogConfig<Product>,
                private productService: CommonProductsService,
                private ref: DynamicDialogRef,
                private messageService: MessageService,
                private confirmationService: ConfirmationService,
                private auth: AuthorizeService
    ) {
        if(dialogConfig && dialogConfig.data) {
            this.product = dialogConfig.data;
        }
    }

    ngOnInit(): void {
        if(this.product.storeId === "" && this.auth.current && this.auth.current.storeId) {
            this.product.storeId = this.auth.current.storeId;
        }
    }

    save() {
        this.loading = true;
        if (this.product.id) {
            this.productService.updateProduct(this.product).subscribe({
                next: () => {
                    this.confirmation("Product updated");
                },
                error: (er) => {
                    this.confirmation("Failed to update product", er.message);
                }
            });
        } else {
            this.productService.addProduct(this.product).subscribe({
                next: () => {
                    this.confirmation("Product added");
                },
                error: (er) => {
                    this.confirmation("Failed to add product", er.message);
                },
            })
        }
    }

    confirmation(toastMessage: string, errorMessage?: string) {
        this.loading = false;
        if(errorMessage) {
            this.messageService.add(getToastMessage(ToastMessageType.ERROR, toastMessage + errorMessage));
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

    delete() {
        this.loading = true;
        this.productService.deleteProduct(this.product.id!).subscribe({
            next: () => {
                this.confirmation("product deleted");
            },
            error: (er) => {
                this.confirmation("failed to delete product", er.message);
            },
        })
    }

    deleteConfirmation() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this product?',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon:"pi pi-times",
            rejectIcon:"none",
            acceptLabel: 'Delete',
            rejectLabel: 'Cancel',
            accept: () => this.delete(),
        })
    }
}
