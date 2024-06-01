import {
    BaseCommonRestService
} from "../../../../../common/src/lib/common-rest-services/base-common-rest-service.service";
import {environment} from "../../../../../common/src/lib/environments/environment";
import {Injectable, Injector} from "@angular/core";
import {Form} from 'projects/common/src/lib/common-rest-models/Form/form';

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

    public add(form: Form) {
        return this.post<Form>(`${this.baseUrl}/add`, form);
    }

    public update(form: Form) {
        return this.put<Form>(`${this.baseUrl}/${form.id}`, form);
    }

    public deleteForm(id: string) {
        return this.delete<Form>(`${this.baseUrl}/${id}`)
    }

}
