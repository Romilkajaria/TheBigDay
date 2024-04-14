import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PriceType} from "../../../../../../common/src/lib/common-rest-models/item";
import {Service} from "../../../../../../common/src/lib/common-rest-models/service";
import {DialogPriceTypeOptions} from "../../../../../../common/src/lib/helpers/page-helpers";
import {getToastMessage, ToastMessageType} from "../../../../../../common/src/lib/helpers/toastMessages";
import {ConfirmationService, Message, MessageService} from "primeng/api";
import {KeyValue} from "@angular/common";
import {
    CommonServicesService
} from "../../../../../../common/src/lib/common-rest-services/services/common-services-service.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {DialogConfig} from "@angular/cdk/dialog";
import {AuthorizeService} from "../../../../../../common/src/lib/components/auth/login/authorize.service";

@Component({
    selector: 'app-add-services-form',
    templateUrl: './add-services-form.component.html',
    styleUrls: ['./add-services-form.component.scss'],
    providers: [DialogConfig, MessageService, ConfirmationService]
})
export class AddServicesFormComponent implements OnInit {
    service: Service = {
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

    constructor(private servicesService: CommonServicesService,
                private dialogConfig: DynamicDialogConfig<Service>,
                private ref: DynamicDialogRef,
                private messageService: MessageService,
                private confirmationService: ConfirmationService,
                private auth: AuthorizeService) {
        if(dialogConfig && dialogConfig.data) {
            this.service = dialogConfig.data;
        }
    }
    @Output() onClose = new EventEmitter<void>();
    loading = false;
    priceTypeOptions = DialogPriceTypeOptions;


    ngOnInit(): void {
        if(this.service.storeId === "" && this.auth.current && this.auth.current.storeId) {
            this.service.storeId = this.auth.current.storeId;
        }
    }

    save() {
        this.loading = true;
        if (this.service.id) {
            this.servicesService.updateService(this.service).subscribe({
                next: () => {
                    this.confirmation("Service updated");
                },
                error: (er) => {
                    this.confirmation("Failed to update service", er.message);
                }
            });
        } else {
            this.servicesService.addService(this.service).subscribe({
                next: () => {
                    this.confirmation("Service added");
                },
                error: (er) => {
                    this.confirmation("Failed to add service", er.message);
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
        this.service.priceType = $event.key;
    }

    delete() {
        this.loading = true;
        this.servicesService.deleteService(this.service.id!).subscribe({
            next: () => {
                this.confirmation("Service deleted");
            },
            error: (er) => {
                this.confirmation("Failed to delete service", er.message);
            },
        })
    }

    deleteConfirmation() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this service?',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon:"pi pi-times",
            rejectIcon:"none",
            acceptLabel: 'Delete',
            rejectLabel: 'Cancel',
            accept: () => this.delete(),
        })
    }
}
