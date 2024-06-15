import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {
    StoreService
} from "../../../../../common/src/lib/common-rest-services/store/store-service.service";
import {IDashboardCard} from "../../../../../common/src/lib/components/uikit/dashboard-card/dashboard-card.component";
import {Store} from "../../../../../common/src/lib/common-rest-models/store";
import {FormEntry} from "../../../../../common/src/lib/common-rest-models/form-entry";

@Component({
    selector: 'app-vendor-store',
    templateUrl: './vendor-store.component.html',
    styleUrls: ['./vendor-store.component.scss'],
})
export class VendorStoreComponent implements OnInit {
    public vendor?: Store;
    public productId?: string | null;
    public serviceId?: string | null;
    public vendorId?: string | null
    loading = true;

    constructor(private route: ActivatedRoute,
                private vendorService: StoreService) {


        // this.vendorService.getVendor()
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((param) => {
            this.productId = param['product'];
            this.serviceId = param['service'];
            this.vendorId = param['vendor'];

            if(this.vendorId) {
                this.vendorService.getVendor(this.vendorId).subscribe((v) => {
                    this.vendor = v;
                    this.loading = false;
                })
            }
        })
    }

    addCardWrapperProduct(item: FormEntry): IDashboardCard<FormEntry> {
        return {
            heading: '',
            maxWidth: '260px',
            subheading: 'popular',
            metadata: item
        } as IDashboardCard<FormEntry>;
    }

    addCardWrapperService(item: FormEntry): IDashboardCard<FormEntry> {
        return {
            heading: '',
            maxWidth: '260px',
            subheading: 'popular',
            metadata: item
        } as IDashboardCard<FormEntry>;
    }
}
