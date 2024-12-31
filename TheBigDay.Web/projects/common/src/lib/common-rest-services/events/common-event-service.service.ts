import {Injectable, Injector} from '@angular/core';
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {environment} from "../../environments/environment";
import {Event} from "../../common-rest-models/event";

@Injectable({
    providedIn: 'root'
})
export class CommonEventServiceService extends BaseCommonRestService {
    private readonly eventUrl = environment.apiUrl + "event";

    constructor(injector: Injector) {
        super(injector);
    }

    public getTBDEvent() {
        return this.http.get<Event[]>(this.eventUrl);
    }

    public addTBDEvent(tbdEvent: Event) {
        return this.http.post<Event>(this.eventUrl, tbdEvent);
    }

    public updateTBDEvent(tbdEvent: Event) {
        return this.http.put<Event>(`${this.eventUrl}/${tbdEvent.id}`, tbdEvent);
    }

    public deleteTBDEvent(id: string) {
        return this.http.delete<Event>(`${this.eventUrl}/${id}`)
    }
}
