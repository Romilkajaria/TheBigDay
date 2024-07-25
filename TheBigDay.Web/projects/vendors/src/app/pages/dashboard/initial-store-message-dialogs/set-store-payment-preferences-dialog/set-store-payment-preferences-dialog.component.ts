import { Component } from '@angular/core';
import {DialogConfig} from "@angular/cdk/dialog";
import {ConfirmationService, Message, MessageService} from "primeng/api";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Store} from "../../../../../../../common/src/lib/common-rest-models/store";
import {StoreService} from "../../../../../../../common/src/lib/common-rest-services/store/store-service.service";
import {getToastMessage, ToastMessageType} from "../../../../../../../common/src/lib/helpers/toastMessages";

@Component({
  selector: 'vendors-set-store-payment-preferences-dialog',
  standalone: true,
  imports: [],
  templateUrl: './set-store-payment-preferences-dialog.component.html',
  styleUrl: './set-store-payment-preferences-dialog.component.scss',
    providers: [DialogConfig, MessageService, ConfirmationService]
})
export class SetStorePaymentPreferencesDialogComponent {
    public loading = false;
    public constructor(private dialogConfig: DynamicDialogConfig<Store>,
                       private storeService: StoreService,
                       private messageService: MessageService,
                       private ref: DynamicDialogRef) {
    }

    save() {
        this.loading = true
        this.storeService.updateVendor(this.dialogConfig.data!).subscribe({
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
