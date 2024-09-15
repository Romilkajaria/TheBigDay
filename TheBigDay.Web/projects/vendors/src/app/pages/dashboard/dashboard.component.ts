import {Component, OnDestroy, OnInit} from '@angular/core';
import {Message, MessageService} from 'primeng/api';
import {Subscription, switchMap, tap} from 'rxjs';
import {LayoutService} from "../../../../../common/src/lib/layout/service/app.layout.service";
import {Store} from "../../../../../common/src/lib/common-rest-models/store";
import {AuthorizeService} from "../../../../../common/src/lib/components/auth/login/authorize.service";
import {FormEntry} from "../../../../../common/src/lib/common-rest-models/form-entry";
import {DialogService} from "primeng/dynamicdialog";
import {
    SetStoreTypeDialogComponent
} from "./initial-store-message-dialogs/set-store-type-dialog/set-store-type-dialog.component";
import {StoreService} from "../../../../../common/src/lib/common-rest-services/store/store-service.service";
import {User} from "../../../../../common/src/lib/common-rest-models/user";
import {
    SetUserProfileDialogComponent
} from "./initial-store-message-dialogs/set-user-profile-dialog/set-user-profile-dialog.component";
import {
    SetStoreDetailsDialogComponent
} from "./initial-store-message-dialogs/set-store-details-dialog/set-store-details-dialog.component";
import {FormService} from "../../../../../common/src/lib/common-rest-models/Form/form.service";
import {Form} from 'projects/common/src/lib/common-rest-models/Form/form';
import {FormBuilderComponent} from "../../../../../common/src/lib/components/form/form-builder/form-builder.component";
import {
    SetStorePaymentPreferencesDialogComponent
} from "./initial-store-message-dialogs/set-store-payment-preferences-dialog/set-store-payment-preferences-dialog.component";
import {ItemCategoryService} from "../../../../../common/src/lib/common-rest-services/item-category.service";
import {ItemCategory} from "../../../../../common/src/lib/common-rest-models/item-category";
import {VendorTypes} from "../vendor-categories/venue/add-venue/add-venue.component";

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DialogService, MessageService]
})
export class DashboardComponent implements OnInit, OnDestroy {
    products!: FormEntry[];

    subscription!: Subscription;

    loading = true
    itemCategories?: ItemCategory[];
    store?: Store;
    messages: MessageConfig[] = [];
    user?: User;

    constructor(public layoutService: LayoutService,
                auth: AuthorizeService,
                private dialogService: DialogService,
                private messageService: MessageService,
                private storeService: StoreService,
                private formService: FormService,
                private itemCategoryService: ItemCategoryService) {
        this.store = auth.current?.store;
    }

    public get activeMessageCount() {
        return this.messages.filter(m => !m.hide).length;
    }

    ngOnInit() {
        this.setMessages();
        this.itemCategoryService.getCategories().subscribe((ic) => this.itemCategories = ic)
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    public showVenues() {
        return this.store?.itemCategories.length
            && this.itemCategories?.length
            && this.store.itemCategories.some((ic) => ic.name === VendorTypes.VENUE)
    }


    private setStoreType() {
        this.dialogService.open(SetStoreTypeDialogComponent, {
            header: 'Set store type',
            data: this.store,
            width: '50rem'
        })
            .onClose
            .pipe(
                tap((message?: Message) => {
                    if (message) {
                        this.messageService.add(message);
                    }
                }),
                switchMap(() => this.storeService.getVendor(this.store!.id)))
            .subscribe((store) => {
                this.store = store;
                this.setMessages();
            })
    }

    private setProfile() {
        this.dialogService.open(SetUserProfileDialogComponent, {
            header: 'Setup your profile',
            data: this.user,
            width: '50rem'
        })
            .onClose
            .pipe(
                tap((message?: Message) => {
                    if (message) {
                        this.messageService.add(message);
                    }
                }),
                switchMap(() => this.storeService.getVendor(this.store!.id)))
            .subscribe((store) => {
                this.store = store;
                this.setMessages();
            })
    }

    private setMessages() {
        this.messages = [
            {
                severity: 'warn',
                summary: 'Are you an individual or a business?',
                hide: this.store?.storeType != undefined,
                timeToFinish: '< 1 min',
                actionButtonText: 'Set store type',
                onButtonClick: () => this.setStoreType(),
            }, {
                severity: 'warn',
                summary: 'Finish off setting up your personal profile',
                hide: this.user?.hasCompletedProfile,
                timeToFinish: '< 5 mins',
                actionButtonText: 'Setup profile',
                onButtonClick: () => this.setProfile(),
            }, {
                severity: 'warn',
                summary: 'Start setting up your store',
                hide: this.store?.hasCompletedStoreSetup,
                timeToFinish: '< 5 mins',
                actionButtonText: "Start",
                onButtonClick: () => this.startSettingStoreDetailWizard()
            }, {
                severity: 'warn',
                summary: 'Set your payment preferences',
                hide: this.store?.depositPercentage !== null && this.store?.fullPaymentPrecedingEventDays !== null,
                timeToFinish: '< 5 mins',
                actionButtonText: "Set preferences",
                onButtonClick: () => this.setStorePaymentPreferences()
            }
        ]
        if (this.store?.storeType !== undefined && this.store.hasCompletedStoreSetup) {
            // this.formService.getStoreForms(this.store.itemCategories.map(ic => ic.itemCategoryId)).subscribe(
            //     (form) => {
            //     form.forEach(f => {
            //         this.messages.push({
            //             severity: 'warn',
            //             summary: f.name,
            //             timeToFinish: "10 mins",
            //             actionButtonText: "Start",
            //             onButtonClick: () => this.openForm(f),
            //         })
            //     })
            // })
        }
    }

    private startSettingStoreDetailWizard() {
        this.dialogService.open(SetStoreDetailsDialogComponent, {
            header: 'Set store details',
            data: this.store,
            width: '60rem',
            height: '60rem'
        })
            .onClose
            .pipe(
                tap((message?: Message) => {
                    if (message) {
                        this.messageService.add(message);
                    }
                }),
                switchMap(() => this.storeService.getVendor(this.store!.id)))
            .subscribe((store) => {
                this.store = store;
                this.setMessages();
            })
    }

    private openForm(form: Form) {
        this.dialogService.open(FormBuilderComponent, {header: form.name, data: form, width: '60%', height: '80%'})
    }

    private setStorePaymentPreferences() {
        this.dialogService.open(SetStorePaymentPreferencesDialogComponent, {
            header: 'Set store payment preference',
            data: this.store,
            width: '60rem',
            height: '60rem'
        })
            .onClose
            .pipe(
                tap((message?: Message) => {
                    if (message) {
                        this.messageService.add(message);
                    }
                }),
                switchMap(() => this.storeService.getVendor(this.store!.id)))
            .subscribe((store) => {
                this.store = store;
                this.setMessages();
            })
    }
}

export interface MessageConfig extends Message {
    hide?: boolean;
    timeToFinish?: string;
    actionButtonText?: string;
    onButtonClick?: () => void;
}
