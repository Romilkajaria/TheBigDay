import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DialogConfig} from "@angular/cdk/dialog";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, MenuItem, Message, MessageService} from "primeng/api";
import {AuthorizeService} from "../../../../../../../common/src/lib/components/auth/login/authorize.service";
import {Venue} from "../../../../../../../common/src/lib/common-rest-models/venue";
import {VenueService} from "../../../../../../../common/src/lib/common-rest-services/venue/venue.service";
import {getToastMessage, ToastMessageType} from "../../../../../../../common/src/lib/helpers/toastMessages";


const steps: MenuItem[] = [{
    label: 'Property Details',
    icon: 'pi-circle'
}, {
    label: 'Event details'
}, {
    label: 'Location'
}, {
    label: 'Amenities'
}, {
    label: 'Photos'
}, {
    label: 'Description & title'
}, {
    label: 'Booking settings'
}, {
    label: 'Calendar & availability'
}, {
    label: 'Pricing & security'
}, {
    label: 'Review'
}]
@Component({
    selector: 'app-add-venue',
    templateUrl: './add-venue.component.html',
    styleUrls: ['./add-venue.component.scss'],
    providers: [DialogConfig, MessageService, ConfirmationService]
})
export class AddVenueComponent implements OnInit {
    @Output() onClose = new EventEmitter<void>();
    venue?: Venue;
    loading = false;
    steps = steps;
    stepIndex = 0;
    readonly maxSteps = steps.length

    constructor(private dialogConfig: DynamicDialogConfig<Venue>,
                private venueService: VenueService,
                private ref: DynamicDialogRef,
                private messageService: MessageService,
                private confirmationService: ConfirmationService,
                public auth: AuthorizeService
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
                    this.confirmation("Venue updated");
                },
                error: (er) => {
                    this.confirmation("Failed to update venue", er.message);
                }
            });
        } else {
            this.venueService.addVenue(this.venue).subscribe({
                next: () => {
                    this.confirmation("Venue added");
                },
                error: (er) => {
                    this.confirmation("Failed to add venue", er.message);
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
                this.confirmation("Venue deleted");
            },
            error: (er) => {
                this.confirmation("failed to delete venue", er.message);
            },
        })
    }

    deleteConfirmation() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this venue?',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon:"pi pi-times",
            rejectIcon:"none",
            acceptLabel: 'Delete',
            rejectLabel: 'Cancel',
            accept: () => this.delete(),
        })
    }
}
