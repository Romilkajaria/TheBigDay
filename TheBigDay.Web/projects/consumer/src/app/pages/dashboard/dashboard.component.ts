import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Subscription} from 'rxjs';
import {LayoutService} from "../../../../../common/src/lib/layout/service/app.layout.service";
import {
    CommonProductsService
} from "../../../../../common/src/lib/common-rest-services/products/common-products-service.service";
import {IDashboardCard} from "../../../../../common/src/lib/components/uikit/dashboard-card/dashboard-card.component";
import {Router} from "@angular/router";
import {Product} from "../../../../../common/src/lib/common-rest-models/product";

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    dashboardCards!: IDashboardCard<Product>[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;
    loading = true;

    constructor( public layoutService: LayoutService,
                 private productsService: CommonProductsService,
                 private router: Router) {
    }

    ngOnInit() {
        this.loading = true
        this.productsService.getProducts().subscribe((products) => {
            this.dashboardCards = products.map((p) => ({
                heading: p.name,
                description: p.description,
                maxWidth: '360px',
                subheading: 'popular',
                metadata: p
            } as IDashboardCard<Product>));
            this.loading = false;
        });
    }


    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    async onDashboardCardSelected(dashboardCard: IDashboardCard<Product>) {
        console.log(dashboardCard);
        await this.router.navigate(['store'])
    }
}
