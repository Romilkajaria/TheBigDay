import {Injectable, Injector} from "@angular/core";
import {
    BaseCommonRestService
} from "../../../../../common/src/lib/common-rest-services/base-common-rest-service.service";
import {environment} from "../../../../../common/src/lib/environments/environment";
import {ItemCategory} from "../../../../../common/src/lib/common-rest-models/item-category";
import {EventCategory} from "../../../../../common/src/lib/common-rest-models/event.category";

@Injectable({
    providedIn: "root",
})
export class EventCategoryService extends BaseCommonRestService {

    private readonly baseUrl = environment.apiUrl + "EventCategory";
    constructor(injector: Injector) {
        super(injector);
    }

    public getEventCategories() {
        return this.get<EventCategory[]>(this.baseUrl);
    }

    public add(category: EventCategory) {
        return this.post<EventCategory>(`${this.baseUrl}/add`, category);
    }

    public update(category: ItemCategory) {
        return this.put<EventCategory>(`${this.baseUrl}/${category.id}`, category);
    }

    public deleteCategory(id: string) {
        return this.delete<EventCategory>(`${this.baseUrl}/${id}`)
    }

}
