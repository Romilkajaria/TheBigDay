import {Component, OnDestroy, OnInit} from '@angular/core';
import {Message, MessageService} from 'primeng/api';
import {Subscription, switchMap, tap} from 'rxjs';
import {LayoutService} from "../../../../../common/src/lib/layout/service/app.layout.service";
import {Store} from "../../../../../common/src/lib/common-rest-models/store";
import {AuthorizeService} from "../../../../../common/src/lib/components/auth/login/authorize.service";
import {FormEntry} from "../../../../../common/src/lib/common-rest-models/form-entry";
import {DialogService} from "primeng/dynamicdialog";
import {SetStoreTypeDialogComponent} from "./set-store-type-dialog/set-store-type-dialog.component";
import {
    StoreService
} from "../../../../../common/src/lib/common-rest-services/store/store-service.service";
import {User} from "../../../../../common/src/lib/common-rest-models/user";
import {SetUserProfileDialogComponent} from "./set-user-profile-dialog/set-user-profile-dialog.component";
import {SetStoreDetailsDialogComponent} from "./set-store-details-dialog/set-store-details-dialog.component";
// import {SetProfileDialogComponent} from "./set-profile-diallog/set-profile-dialog.component";

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DialogService, MessageService]
})
export class DashboardComponent implements OnInit, OnDestroy {
    products!: FormEntry[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    loading = true

    store?: Store;
    messages: MessageConfig[] = [];
    user?: User;

    constructor( public layoutService: LayoutService,
                 auth: AuthorizeService,
                 private dialogService: DialogService,
                 private messageService: MessageService,
                 private storeService: StoreService) {
        this.store = auth.current?.store;
    }

    ngOnInit() {
        this.setMessages();
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
    public get activeMessageCount() {
        return this.messages.filter(m => !m.hide ).length;
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    private setStoreType() {
        this.dialogService.open(SetStoreTypeDialogComponent, {header: 'Set store type', data: this.store, width: '50rem'})
            .onClose
            .pipe(
                tap((message?: Message) => {
                    if(message) {
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
        this.dialogService.open(SetUserProfileDialogComponent, {header: 'Setup your profile', data: this.user, width: '50rem'})
            .onClose
            .pipe(
                tap((message?: Message) => {
                    if(message) {
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
            { severity: 'info', summary: 'Are you an individual or a business?',
                hide: this.store?.storeType != undefined,
                timeToFinish: '< 1 min',
                actionButtonText: 'Set store type',
                onButtonClick: () => this.setStoreType(),
            },
            { severity: 'info',
                summary: 'Finish off setting up your personal profile',
                hide: this.user?.hasCompletedProfile,
                timeToFinish: '< 5 mins',
                actionButtonText: 'Setup profile',
                onButtonClick: () => this.setProfile(),
            },
            { severity: 'info',
                summary: 'Start setting up your store',
                hide: this.store?.hasCompletedStoreSetup,
                timeToFinish: '< 5 mins',
                actionButtonText: "Start",
                onButtonClick: () => this.startSettingStoreDetailWizard()
            }
        ]
    }

    private startSettingStoreDetailWizard() {
        this.dialogService.open(SetStoreDetailsDialogComponent, {header: 'Set store details', data: this.store, width: '50rem'})
            .onClose
            .pipe(
                tap((message?: Message) => {
                    if(message) {
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
