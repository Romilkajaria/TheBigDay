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
import {MultiSelectModule} from "primeng/multiselect";
import {getToastMessage, ToastMessageType} from "../../../../../../common/src/lib/helpers/toastMessages";
import {ConfirmationService, Message, MessageService} from "primeng/api";

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
    public itemCategories?: ItemCategory[];
    public stepIndex = 0;
    private loading = false;
    private ref: any;

    constructor(private storeService: StoreService,
                private authService: AuthorizeService,
                private messageService: MessageService,
                itemCategoryService: ItemCategoryService) {
        itemCategoryService.getCategories().subscribe((ic) => this.itemCategories = ic)
    }

    public ngOnInit() {
        this.store = this.authService.current?.store;
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
}
