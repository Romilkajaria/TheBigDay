import {Injectable, Injector} from '@angular/core';
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {environment} from "../../environments/environment";
import {Store} from "../../common-rest-models/store";
import {RegisterVendor} from "../../common-rest-models/authentication-models";

@Injectable({
  providedIn: 'root'
})
export class StoreService extends BaseCommonRestService {

    private readonly vendorUrl = environment.apiUrl + "store";
    constructor(injector: Injector) {
        super(injector);
    }

    public getVendors() {
        return this.get<Store[]>(this.vendorUrl);
    }

    public getVendor(vendorId: string) {
        return this.get<Store>(`${this.vendorUrl}/${vendorId}`)
    }

    public addVendor(vendor: RegisterVendor) {
        return this.post<RegisterVendor>(this.vendorUrl, vendor);
    }

    public updateVendor(vendor: Store) {
        return this.put<Store>(`${this.vendorUrl}/${vendor.id}`, vendor);
    }

    public deleteVendor(id: string) {
        return this.delete<Store>(`${this.vendorUrl}/${id}`)
    }
}
