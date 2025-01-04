import {Injectable, Injector} from '@angular/core';
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {environment} from "../../environments/environment";
import {TBDEvent} from "../../common-rest-models/TBDEvent";

@Injectable({
    providedIn: 'root'
})
export class CommonEventServiceService extends BaseCommonRestService {
    private readonly eventUrl = environment.apiUrl + "event";

    constructor(injector: Injector) {
        super(injector);
    }

    public getTBDEvent() {
        return this.http.get<TBDEvent[]>(this.eventUrl);
    }

    public addTBDEvent(tbdEvent: TBDEvent) {
        return this.http.post<TBDEvent>(this.eventUrl, tbdEvent);
    }

    public updateTBDEvent(tbdEvent: TBDEvent) {
        return this.http.put<TBDEvent>(`${this.eventUrl}/${tbdEvent.id}`, tbdEvent);
    }

    public deleteTBDEvent(id: string) {
        return this.http.delete<TBDEvent>(`${this.eventUrl}/${id}`)
    }
}
