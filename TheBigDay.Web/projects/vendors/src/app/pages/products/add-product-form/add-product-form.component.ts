import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DialogConfig} from "@angular/cdk/dialog";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {
    CommonProductsService
} from "../../../../../../common/src/lib/common-rest-services/products/common-products-service.service";
import {ConfirmationService, Message, MessageService} from "primeng/api";
import {getToastMessage, ToastMessageType} from "../../../../../../common/src/lib/helpers/toastMessages";
import {AuthorizeService} from "../../../../../../common/src/lib/components/auth/login/authorize.service";
import {FormEntry} from "../../../../../../common/src/lib/common-rest-models/form-entry";

@Component({
    selector: 'app-add-product-form',
    templateUrl: './add-product-form.component.html',
    styleUrls: ['./add-product-form.component.scss'],
    providers: [DialogConfig, MessageService, ConfirmationService]
})
export class AddProductFormComponent implements OnInit{
    product?: FormEntry
    @Output() onClose = new EventEmitter<void>();
    loading = false;

    constructor(private dialogConfig: DynamicDialogConfig<FormEntry>,
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
        if(this.product && this.product.storeId === "" && this.auth.current && this.auth.current.storeId) {
            this.product.storeId = this.auth.current.storeId;
        }
    }

    save() {
        this.loading = true;
        if(!this.product) return;
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

    delete() {
        this.loading = true;
        this.productService.deleteProduct(this.product!.id).subscribe({
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
