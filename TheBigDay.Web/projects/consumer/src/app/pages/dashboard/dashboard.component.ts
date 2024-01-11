import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {forkJoin, Subscription} from 'rxjs';
import {LayoutService} from "../../../../../common/src/lib/layout/service/app.layout.service";
import {
    CommonProductsService
} from "../../../../../common/src/lib/common-rest-services/products/common-products-service.service";
import {IDashboardCard} from "../../../../../common/src/lib/components/uikit/dashboard-card/dashboard-card.component";
import {Router} from "@angular/router";
import {Product} from "../../../../../common/src/lib/common-rest-models/product";
import {CarouselResponsiveOptions} from "primeng/carousel";
import {Service} from "../../../../../common/src/lib/common-rest-models/service";
import {Vendor} from "../../../../../common/src/lib/common-rest-models/vendor";
import {
    CommonServicesService
} from "../../../../../common/src/lib/common-rest-services/services/common-services-service.service";
import {
    CommonVendorService
} from "../../../../../common/src/lib/common-rest-services/vendors/common-vendor-service.service";
import {TBDItem} from "../../../../../common/src/lib/common-rest-models/item";

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    products!: IDashboardCard<Product>[];
    services!: IDashboardCard<Service>[];
    vendors!: IDashboardCard<Vendor>[];

    subscription!: Subscription;
    loading = true;
    responsiveOptions: CarouselResponsiveOptions[] = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    constructor( public layoutService: LayoutService,
                 private productsService: CommonProductsService,
                 private servicesService: CommonServicesService,
                 private vendorService: CommonVendorService,
                 private router: Router) {
    }

    ngOnInit() {
        this.loading = true
        forkJoin([
            this.productsService.getProducts(),
            this.vendorService.getVendors(),
            this.servicesService.getServices(),
        ]).subscribe(([products, vendors, services]) => {
            this.products = this.mapToDashboardElement(products);
            this.services = this.mapToDashboardElement(services);

            this.vendors = vendors.map((v) => ({
                heading: v.name,
                description: v.description,
                maxWidth: '360px',
                subheading: 'popular',
                metadata: v
            } as IDashboardCard<Vendor>))
            this.loading = false;
        })
        this.productsService.getProducts().subscribe((products) => {

        });

        this.vendorService.getVendors().subscribe((vendors) => {

        })
    }

    private mapToDashboardElement<T extends TBDItem>(items: T[]): IDashboardCard<T>[] {
        return items.map((p) => ({
            heading: p.name,
            description: p.description,
            maxWidth: '360px',
            subheading: 'popular',
            metadata: p
        } as IDashboardCard<T>))
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
