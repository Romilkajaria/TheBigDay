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
          return this.get<Event[]>(this.eventUrl);
      }

  public addTBDEvent(tbdEvent: Event) {
          return this.post<Event>(this.eventUrl, tbdEvent);
      }

  public updateTBDEvent(tbdEvent: Event) {
          return this.put<Event>(`${this.eventUrl}/${tbdEvent.id}`, tbdEvent);
      }

  public deleteTBDEvent(id: string) {
          return this.delete<Event>(`${this.eventUrl}/${id}`)
      }
}
