import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DialogConfig} from "@angular/cdk/dialog";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, Message, MessageService} from "primeng/api";
import {
    CommonProductsService
} from "../../../../../../../common/src/lib/common-rest-services/products/common-products-service.service";
import {AuthorizeService} from "../../../../../../../common/src/lib/components/auth/login/authorize.service";
import {Venue} from "../../../../../../../common/src/lib/common-rest-models/venue";
import {VenueService} from "../../../../../../../common/src/lib/common-rest-services/venue/venue.service";
import {getToastMessage, ToastMessageType} from "../../../../../../../common/src/lib/helpers/toastMessages";

@Component({
    selector: 'app-add-venue',
    templateUrl: './add-venue.component.html',
    styleUrls: ['./add-venue.component.scss'],
    providers: [DialogConfig, MessageService, ConfirmationService]
})
export class AddVenueComponent implements OnInit{
    @Output() onClose = new EventEmitter<void>();
    venue?: Venue;
    loading = false;

    constructor(private dialogConfig: DynamicDialogConfig<Venue>,
                private venueService: VenueService,
                private ref: DynamicDialogRef,
                private messageService: MessageService,
                private confirmationService: ConfirmationService,
                private auth: AuthorizeService
    ) {
        if(dialogConfig && dialogConfig.data) {
            this.venue = dialogConfig.data;
        }
    }

    ngOnInit(): void {
        if(this.venue && this.venue.storeId === "" && this.auth.current && this.auth.current.storeId) {
            this.venue.storeId = this.auth.current.storeId;
        }
    }

    save() {
        this.loading = true;
        if(!this.venue) return;
        if (this.venue.id) {
            this.venueService.updateVenue(this.venue).subscribe({
                next: () => {
                    this.confirmation("Product updated");
                },
                error: (er) => {
                    this.confirmation("Failed to update product", er.message);
                }
            });
        } else {
            this.venueService.addVenue(this.venue).subscribe({
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
        this.venueService.deleteVenue(this.venue!.id).subscribe({
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
