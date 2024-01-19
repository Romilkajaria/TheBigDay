import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {
    CommonProductsService
} from "../../../../../common/src/lib/common-rest-services/products/common-products-service.service";
import {
    CommonServicesService
} from "../../../../../common/src/lib/common-rest-services/services/common-services-service.service";
import {
    CommonVendorService
} from "../../../../../common/src/lib/common-rest-services/vendors/common-vendor-service.service";
import {Product} from "../../../../../common/src/lib/common-rest-models/product";
import {Service} from "../../../../../common/src/lib/common-rest-models/service";
import {IDashboardCard} from "../../../../../common/src/lib/components/uikit/dashboard-card/dashboard-card.component";
import {TBDItem} from "../../../../../common/src/lib/common-rest-models/item";
import {Vendor} from "../../../../../common/src/lib/common-rest-models/vendor";

@Component({
    selector: 'app-vendor-store',
    templateUrl: './vendor-store.component.html',
    styleUrls: ['./vendor-store.component.scss'],
})
export class VendorStoreComponent implements OnInit {
    public vendor?: Vendor;
    public productId?: string | null;
    public serviceId?: string | null;
    public vendorId?: string | null

    constructor(private route: ActivatedRoute,
                private vendorService: CommonVendorService) {


        // this.vendorService.getVendor()
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((param) => {
            this.productId = param['product'];
            this.serviceId = param['service'];
            this.vendorId = param['vendor'];

            if(this.vendorId) {
                this.vendorService.getVendor(this.vendorId).subscribe((v) => {
                    this.vendor = v
                })
            }
        })
    }

    addCardWrapperProduct(item: Product): IDashboardCard<Product> {
        return {
            heading: item.name,
            description: item.description,
            maxWidth: '260px',
            subheading: 'popular',
            metadata: item
        } as IDashboardCard<Product>;
    }

    addCardWrapperService(item: Service): IDashboardCard<Service> {
        return {
            heading: item.name,
            description: item.description,
            maxWidth: '260px',
            subheading: 'popular',
            metadata: item
        } as IDashboardCard<Service>;
    }
}
