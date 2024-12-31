import {BaseCommonRestService} from "../../common-rest-services/base-common-rest-service.service";
import {environment} from "../../environments/environment";
import {Injectable, Injector} from "@angular/core";
import {Form} from './form';
import {HttpParams} from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class FormService extends BaseCommonRestService {

    private readonly baseUrl = environment.apiUrl + "form";

    constructor(injector: Injector) {
        super(injector);
    }

    public getForms() {
        return this.http.get<Form[]>(this.baseUrl);
    }

    public getStoreForms(itemCategoryIds: string[]) {
        return this.http.post<Form[]>(`${this.baseUrl}/storeforms`, itemCategoryIds)
    }

    public getProductForms(itemCategoryId: string) {
        const params = new HttpParams()
            .set('itemCategoryId', itemCategoryId);
        return this.http.get<Form[]>(`${this.baseUrl}/productForms`, {params})
    }

    public getServiceForms(itemCategoryId: string) {
        const params = new HttpParams()
            .set('itemCategoryId', itemCategoryId);
        return this.http.get<Form[]>(`${this.baseUrl}/serviceForms`, {params})
    }

    public add(form: Form) {
        return this.http.post<Form>(this.baseUrl, form);
    }

    public update(form: Form) {
        return this.http.put<Form>(this.baseUrl, form);
    }

    public deleteForm(id: string) {
        return this.http.delete<Form>(`${this.baseUrl}/${id}`)
    }

}
