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
import {KeyValue} from "@angular/common";

export interface Category {
    url: string;
}

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    mockCategoryList: Category[] = [

        {url: '../../../assets/categories/DJ.png'},
        {url: './assets/categories/TBD_Caravan.png'},
        {url: './assets/categories/Artists.png'},
        {url: './assets/categories/Florist.png'},
        {url: './assets/categories/Event_Agency.png'},
        {url: './assets/categories/Makeup_Artist.png'},
        {url: './assets/categories/Priest.png'},
        {url: './assets/categories/Photographer.png'},
        {url: './assets/categories/Baraat.png'},
        {url: './assets/categories/TBD_Spot.png'},
        {url: './assets/categories/Caterer.png'},
        {url: './assets/categories/Security.png'},
        {url: './assets/categories/Henna_Artist.png'},
        {url: './assets/categories/Balloon_Decor.png'},
        {url: './assets/categories/Pet_Friendly_Products.png'},
        {url: './assets/categories/Gifting_Solutions.png'},
        {url: './assets/categories/Party_Supplies.png'},
        {url: './assets/categories/Bakers.png'},
        {url: './assets/categories/Invites.png'},
        {url: './assets/categories/Rentals.png'},
        {url: './assets/categories/Idols.png'},
        {url: './assets/categories/Tech_Solutions.png'},
        {url: './assets/categories/Alcohol.png'},
        {url: './assets/categories/Decorators.png'},
        {url: './assets/categories/Fashion.png'},
    ]
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
    categoryResponsiveOptions: CarouselResponsiveOptions[] = [
        {
            breakpoint: '1199px',
            numVisible: 4,
            numScroll: 4
        },
        {
            breakpoint: '991px',
            numVisible: 4,
            numScroll: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3,
            numScroll: 3
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

    async navigateToVendorPage(vendorId: string, product?: Product, service?: Service) {
        const route = `app/store`;

        if(product) {
            await this.router.navigate([route], {queryParams: {product: product.id, vendor: vendorId}})
        } else if(service) {
            await this.router.navigate([route], {queryParams: {product: service.id,  vendor: vendorId}})
        }
    }
}
