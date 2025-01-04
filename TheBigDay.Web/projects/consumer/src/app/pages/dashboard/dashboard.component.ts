import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Subscription} from 'rxjs';
import {IDashboardCard} from "../../../../../common/src/lib/components/uikit/dashboard-card/dashboard-card.component";
import {Router} from "@angular/router";
import {CarouselResponsiveOptions} from "primeng/carousel";
import {FormEntry} from "../../../../../common/src/lib/common-rest-models/form-entry";
import {VenueService} from "../../../../../common/src/lib/common-rest-services/venue/venue.service";
import {
    LocalStorageService
} from "../../../../../common/src/lib/common-services/local-storage-service/local-storage.service";
import {LandingComponent} from "../landing/landing.component";
import {TBDEvent} from "../../../../../common/src/lib/common-rest-models/TBDEvent";
import {Venue} from "../../../../../common/src/lib/common-rest-models/venue";

export interface Category {
    url: string;
}

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    items!: MenuItem[];
    venues: Venue[] = [];

    subscription!: Subscription;
    loading = true;
    event?: TBDEvent;
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

    constructor(
        private venueService: VenueService,
        private localStorageService: LocalStorageService,
        private router: Router) {
    }

    ngOnInit() {
        this.loading = true;
        const eventStateJson = this.localStorageService.getItem(LandingComponent.eventKey)

        if (eventStateJson) {
            this.event = JSON.parse(this.localStorageService.getItem(LandingComponent.eventKey)!) as TBDEvent;

            this.venueService.searchNearbyVenues(this.event.state).subscribe((venues) => {
                this.venues = venues;
                this.loading = false;
            })
        }
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
