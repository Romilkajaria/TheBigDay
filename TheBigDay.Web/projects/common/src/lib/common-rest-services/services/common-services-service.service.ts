import {Injectable, Injector} from '@angular/core';
import {environment} from "../../environments/environment";
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {FormEntry} from "../../common-rest-models/form-entry";

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService extends BaseCommonRestService {

  private readonly serviceUrl = environment.apiUrl + "service";
  constructor(injector: Injector) {
    super(injector);
  }

  public getServices() {
    return this.get<FormEntry[]>(this.serviceUrl);
  }

  public addService(service: FormEntry) {
    return this.post<FormEntry>(this.serviceUrl + '/add', service);
  }

  public updateService(service: FormEntry) {
    return this.put<FormEntry>(`${this.serviceUrl}/${service.id}`, service);
  }

  public deleteService(id: string) {
    return this.delete<FormEntry>(`${this.serviceUrl}/${id}`)
  }
}
