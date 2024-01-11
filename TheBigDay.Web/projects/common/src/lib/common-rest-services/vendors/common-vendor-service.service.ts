import {Injectable, Injector} from '@angular/core';
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {environment} from "../../environments/environment";
import {Vendor} from "../../common-rest-models/vendor";

@Injectable({
  providedIn: 'root'
})
export class CommonVendorService extends BaseCommonRestService {

    private readonly vendorUrl = environment.apiUrl + "vendor";
    constructor(injector: Injector) {
        super(injector);
    }

    public getVendors() {
        return this.get<Vendor[]>(this.vendorUrl);
    }

    public addVendor(service: Vendor) {
        return this.post<Vendor>(this.vendorUrl, service);
    }

    public updateVendor(vendor: Vendor) {
        return this.put<Vendor>(`${this.vendorUrl}/${vendor.id}`, vendor);
    }

    public deleteVendor(id: string) {
        return this.delete<Vendor>(`${this.vendorUrl}/${id}`)
    }
}
