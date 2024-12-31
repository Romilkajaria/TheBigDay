import {Injectable, Injector} from "@angular/core";
import {BaseCommonRestService} from "./base-common-rest-service.service";
import {environment} from "../environments/environment";
import {ItemCategory} from "../common-rest-models/item-category";
import {EventCategory} from "../common-rest-models/event.category";

@Injectable({
    providedIn: "root",
})
export class EventCategoryService extends BaseCommonRestService {

    private readonly baseUrl = environment.apiUrl + "EventCategory";

    constructor(injector: Injector) {
        super(injector);
    }

    public getEventCategories() {
        return this.http.get<EventCategory[]>(this.baseUrl);
    }

    public add(category: EventCategory) {
        return this.http.post<EventCategory>(`${this.baseUrl}/add`, category);
    }

    public update(category: ItemCategory) {
        return this.http.put<EventCategory>(`${this.baseUrl}/${category.id}`, category);
    }

    public deleteCategory(id: string) {
        return this.http.delete<EventCategory>(`${this.baseUrl}/${id}`)
    }

}
