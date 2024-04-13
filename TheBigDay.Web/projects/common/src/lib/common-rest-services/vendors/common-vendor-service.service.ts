import {Injectable, Injector} from '@angular/core';
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {environment} from "../../environments/environment";
import {Vendor} from "../../common-rest-models/vendor";
import {RegisterVendor} from "../../common-rest-models/authentication-models";

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

    public getVendor(vendorId: string) {
        return this.get<Vendor>(`${this.vendorUrl}/${vendorId}`)
    }

    public addVendor(vendor: RegisterVendor) {
        return this.post<RegisterVendor>(this.vendorUrl, vendor);
    }

    public updateVendor(vendor: Vendor) {
        return this.put<Vendor>(`${this.vendorUrl}/${vendor.id}`, vendor);
    }

    public deleteVendor(id: string) {
        return this.delete<Vendor>(`${this.vendorUrl}/${id}`)
    }
}
