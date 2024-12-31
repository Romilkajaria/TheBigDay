import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {forkJoin, Subscription} from 'rxjs';
import {LayoutService} from "../../../../../common/src/lib/layout/service/app.layout.service";
import {
    CommonProductsService
} from "../../../../../common/src/lib/common-rest-services/products/common-products-service.service";
import {IDashboardCard} from "../../../../../common/src/lib/components/uikit/dashboard-card/dashboard-card.component";
import {Router} from "@angular/router";
import {CarouselResponsiveOptions} from "primeng/carousel";
import {Store} from "../../../../../common/src/lib/common-rest-models/store";
import {
    CommonServicesService
} from "../../../../../common/src/lib/common-rest-services/services/common-services-service.service";
import {StoreService} from "../../../../../common/src/lib/common-rest-services/store/store-service.service";
import {FormEntry} from "../../../../../common/src/lib/common-rest-models/form-entry";
import {VenueService} from "../../../../../common/src/lib/common-rest-services/venue/venue.service";

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

    products!: IDashboardCard<FormEntry>[];
    services!: IDashboardCard<FormEntry>[];
    vendors!: IDashboardCard<Store>[];

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
            numVisible: 6,
            numScroll: 6
        }
    ];

    constructor(public layoutService: LayoutService,
                private productsService: CommonProductsService,
                private servicesService: CommonServicesService,
                private vendorService: StoreService,
                private venueService: VenueService,
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
            } as IDashboardCard<Store>))
            this.loading = false;
        })
        this.productsService.getProducts().subscribe((products) => {

        });

        this.vendorService.getVendors().subscribe((vendors) => {

        })
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    async navigateToVendorPage(vendorId: string, product?: FormEntry, service?: FormEntry) {
        const route = `app/store`;

        if (product) {
            await this.router.navigate([route], {queryParams: {product: product.id, vendor: vendorId}})
        } else if (service) {
            await this.router.navigate([route], {queryParams: {product: service.id, vendor: vendorId}})
        }
    }

    private mapToDashboardElement<T extends FormEntry>(items: T[]): IDashboardCard<T>[] {
        return items.map((p) => ({
            heading: '',
            maxWidth: '360px',
            subheading: 'popular',
            metadata: p
        } as IDashboardCard<T>))
    }
}
