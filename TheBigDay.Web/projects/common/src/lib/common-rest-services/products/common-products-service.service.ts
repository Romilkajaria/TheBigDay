import {Injectable, Injector} from '@angular/core';
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {environment} from "../../environments/environment";
import {FormEntry} from "../../common-rest-models/form-entry";

@Injectable({
    providedIn: 'root'
})
export class CommonProductsService extends BaseCommonRestService {

    private readonly productUrl = environment.apiUrl + "product";

    constructor(injector: Injector) {
        super(injector);
    }

    public getProducts() {
        return this.http.get<FormEntry[]>(this.productUrl);
    }

    public addProduct(product: FormEntry) {
        return this.http.post<FormEntry>(this.productUrl + '/add', product);
    }

    public updateProduct(product: FormEntry) {
        return this.http.put<FormEntry>(`${this.productUrl}/${product.id}`, product);
    }

    public deleteProduct(id: string) {
        return this.http.delete<FormEntry>(`${this.productUrl}/${id}`)
    }
}
