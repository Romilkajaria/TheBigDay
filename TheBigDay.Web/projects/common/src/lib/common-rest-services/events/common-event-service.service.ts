import {Injectable, Injector} from '@angular/core';
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {Vendor} from "../../common-rest-models/vendor";
import {TBDEvent} from "../../common-rest-models/event";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommonEventServiceService extends BaseCommonRestService {
    private readonly eventUrl = environment.apiUrl + "event";
  constructor(injector: Injector) {
      super(injector);
  }

  public getTBDEvent() {
          return this.get<TBDEvent[]>(this.eventUrl);
      }

  public addTBDEvent(tbdEvent: TBDEvent) {
          return this.post<TBDEvent>(this.eventUrl, tbdEvent);
      }

  public updateTBDEvent(tbdEvent: TBDEvent) {
          return this.put<TBDEvent>(`${this.eventUrl}/${tbdEvent.id}`, tbdEvent);
      }

  public deleteTBDEvent(id: string) {
          return this.delete<TBDEvent>(`${this.eventUrl}/${id}`)
      }
}
