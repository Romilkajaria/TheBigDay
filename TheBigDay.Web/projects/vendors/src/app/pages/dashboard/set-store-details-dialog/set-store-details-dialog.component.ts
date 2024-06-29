import {Component, OnInit} from '@angular/core';
import {Store} from "../../../../../../common/src/lib/common-rest-models/store";
import {ItemCategory} from "../../../../../../common/src/lib/common-rest-models/item-category";
import {
    StoreService
} from "../../../../../../common/src/lib/common-rest-services/store/store-service.service";
import {AuthorizeService} from "../../../../../../common/src/lib/components/auth/login/authorize.service";
import {ItemCategoryService} from "../../../../../../common/src/lib/common-rest-services/item-category.service";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {EditorModule} from "primeng/editor";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {NgForOf, NgIf} from "@angular/common";
import {MultiSelectChangeEvent, MultiSelectModule} from "primeng/multiselect";
import {getToastMessage, ToastMessageType} from "../../../../../../common/src/lib/helpers/toastMessages";
import {ConfirmationService, Message, MessageService} from "primeng/api";
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'store-set-store-details-dialog',
  standalone: true,
    imports: [
        InputTextModule,
        FormsModule,
        EditorModule,
        ButtonModule,
        RippleModule,
        NgIf,
        NgForOf,
        MultiSelectModule
    ],
  templateUrl: './set-store-details-dialog.component.html',
  styleUrl: './set-store-details-dialog.component.scss',
    providers: [MessageService, ConfirmationService]
})
export class SetStoreDetailsDialogComponent implements OnInit {
    public store?: Store
    public itemCategories: ItemCategory[] = [];
    private loading = false;
    selectedItemCategories: ItemCategory[] = [];

    constructor(private storeService: StoreService,
                private authService: AuthorizeService,
                private messageService: MessageService,
                private ref: DynamicDialogRef,
                private itemCategoryService: ItemCategoryService) {
    }

    public ngOnInit() {
        this.store = this.authService.current?.store;
        this.itemCategoryService.getCategories().subscribe((ic) => {
            this.itemCategories = ic;
            if (this.store && this.store.storeItemCategories) {
                this.selectedItemCategories = this.itemCategories.filter(ic => this.store!.storeItemCategories.some(sic => sic.itemCategoryId === ic.id));
            }
        })
    }

    save() {
        if(!this.store) return;
        this.loading = true;
        this.storeService.updateVendor(this.store).subscribe({
            next: () => {
                this.confirmation("store details updated");
            },
            error: (er) => {
                this.confirmation("Failed to update store details", er.message);
            }
        })
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

    categorySelected($event: MultiSelectChangeEvent) {
        if (this.store) {
            this.store!.storeItemCategories = ($event.value as ItemCategory[]).map(ic => {
                return {
                    itemCategoryId: ic.id!,
                    storeId: this.store!.id
                }
            })
        }

    }
}
