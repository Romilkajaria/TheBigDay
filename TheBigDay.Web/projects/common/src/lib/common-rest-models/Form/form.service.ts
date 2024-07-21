import {
    BaseCommonRestService
} from "../../common-rest-services/base-common-rest-service.service";
import {environment} from "../../environments/environment";
import {Injectable, Injector} from "@angular/core";
import {Form} from './form';

@Injectable({
    providedIn: "root"
})
export class FormService extends BaseCommonRestService {

    private readonly baseUrl = environment.apiUrl + "form";
    constructor(injector: Injector) {
        super(injector);
    }

    public getForms() {
        return this.get<Form[]>(this.baseUrl);
    }

    public getStoreForms(itemCategoryIds: string[]) {
        return this.post<Form[]>(`${this.baseUrl}/storeforms`, itemCategoryIds)
    }

    public getProductForms(itemCategoryId: string) {
        return this.get<Form[]>(`${this.baseUrl}/productForms`, {itemCategoryId: itemCategoryId})
    }
    public getServiceForms(itemCategoryId: string) {
        return this.get<Form[]>(`${this.baseUrl}/serviceForms`, {itemCategoryId: itemCategoryId})
    }

    public add(form: Form) {
        return this.post<Form>(this.baseUrl, form);
    }

    public update(form: Form) {
        return this.put<Form>(this.baseUrl, form);
    }

    public deleteForm(id: string) {
        return this.delete<Form>(`${this.baseUrl}/${id}`)
    }

}
