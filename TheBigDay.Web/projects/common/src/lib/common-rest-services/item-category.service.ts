import {Injectable, Injector} from "@angular/core";
import {
    BaseCommonRestService
} from "./base-common-rest-service.service";
import {environment} from "../environments/environment";
import {ItemCategory} from "../common-rest-models/item-category";

@Injectable({
    providedIn: "root",
})
export class ItemCategoryService extends BaseCommonRestService {

    private readonly baseUrl = environment.apiUrl + "ItemCategory";
    constructor(injector: Injector) {
        super(injector);
    }

    public getCategories() {
        return this.get<ItemCategory[]>(this.baseUrl);
    }

    public add(category: ItemCategory) {
        return this.post<ItemCategory>(`${this.baseUrl}/add`, category);
    }

    public update(category: ItemCategory) {
        return this.put<ItemCategory>(`${this.baseUrl}/${category.id}`, category);
    }

    public deleteCategory(id: string) {
        return this.delete<ItemCategory>(`${this.baseUrl}/${id}`)
    }

}
