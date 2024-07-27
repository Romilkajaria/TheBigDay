import {Component} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {DialogConfig} from "@angular/cdk/dialog";
import {Store, StoreType} from "../../../../../../../common/src/lib/common-rest-models/store";
import {ConfirmationService, Message, MessageService} from "primeng/api";
import {
    StoreService
} from "../../../../../../../common/src/lib/common-rest-services/store/store-service.service";
import {getToastMessage, ToastMessageType} from "../../../../../../../common/src/lib/helpers/toastMessages";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {NgClass} from "@angular/common";

@Component({
  selector: 'store-set-store-type-dialog',
  templateUrl: './set-store-type-dialog.component.html',
    standalone: true,
    imports: [
        ButtonModule,
        RippleModule,
        NgClass
    ],
    providers: [DialogConfig, MessageService, ConfirmationService]
})
export class SetStoreTypeDialogComponent {
    public loading = false;
    public store: Store | undefined;
    public readonly StoreType = StoreType;

    constructor(public dialogConfig: DynamicDialogConfig<Store>,
                private storeService: StoreService,
                private messageService: MessageService,
                private ref: DynamicDialogRef) {
        this.store = this.dialogConfig.data;
    }

    setStoreType(storeType: StoreType) {
        this.store!.storeType = storeType;
    }

    save() {
        this.loading = true
        this.storeService.updateVendor(this.store!).subscribe({
            next: () => {
                this.confirmation("store type saved");
            },
            error: (er) => {
                this.confirmation("Failed to update store type", er.message);
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
