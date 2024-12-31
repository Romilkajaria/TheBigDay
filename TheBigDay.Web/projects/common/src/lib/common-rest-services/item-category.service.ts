import {Injectable, Injector} from "@angular/core";
import {BaseCommonRestService} from "./base-common-rest-service.service";
import {environment} from "../environments/environment";
import {ItemCategory} from "../common-rest-models/item-category";
import {HttpParams} from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class ItemCategoryService extends BaseCommonRestService {

    private readonly baseUrl = environment.apiUrl + "ItemCategory";

    constructor(injector: Injector) {
        super(injector);
    }

    public getItemCategory(id: string) {
        const params = new HttpParams()
            .set('id', id);
        return this.http.get<ItemCategory>(this.baseUrl, {params});
    }

    public getCategories() {
        return this.http.get<ItemCategory[]>(this.baseUrl);
    }

    public add(category: ItemCategory) {
        return this.http.post<ItemCategory>(`${this.baseUrl}/add`, category);
    }

    public update(category: ItemCategory) {
        return this.http.put<ItemCategory>(`${this.baseUrl}/${category.id}`, category);
    }

    public deleteCategory(id: string) {
        return this.http.delete<ItemCategory>(`${this.baseUrl}/${id}`)
    }

}
