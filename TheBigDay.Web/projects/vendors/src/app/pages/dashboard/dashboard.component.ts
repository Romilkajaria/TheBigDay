import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem, Message} from 'primeng/api';
import {Subscription} from 'rxjs';
import {LayoutService} from "../../../../../common/src/lib/layout/service/app.layout.service";
import {
    CommonVendorService
} from "../../../../../common/src/lib/common-rest-services/vendors/common-vendor-service.service";
import {Router} from "@angular/router";
import {Store} from "../../../../../common/src/lib/common-rest-models/store";
import {AuthorizeService} from "../../../../../common/src/lib/components/auth/login/authorize.service";
import {FormEntry} from "../../../../../common/src/lib/common-rest-models/form-entry";

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    products!: FormEntry[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    loading = true

    vendor?: Store;
    messages: MessageConfig[] = [];

    constructor( public layoutService: LayoutService,
                 private vendorService: CommonVendorService,
                 router: Router,
                 private auth: AuthorizeService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];

        this.messages = [
            { severity: 'info', summary: 'Are you an individual or a business?', hide: this.auth.current?.store?.storeType, timeToFinish: 1, actionButtonText: 'Set business type' },
            { severity: 'info', summary: 'Finish off setting up your personal profile', hide: this.auth.current?.hasCompletedProfile, timeToFinish: 5, actionButtonText: 'Setup profile'},
            { severity: 'info', summary: 'Start setting up your store', hide: this.auth.current?.store?.hasCompletedStoreSetup, timeToFinish: 10, actionButtonText: "Start" }
        ]
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
}

export interface MessageConfig extends Message {
    hide?: boolean;
    timeToFinish?: number;
    actionButtonText?: string;
    onButtonClick?: () => void;
}
