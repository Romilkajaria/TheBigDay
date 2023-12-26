import {Injectable, Injector} from '@angular/core';
import {environment} from "../../../../../vendors/src/environments/environment";
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {Service} from "../../common-rest-models/service";

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService extends BaseCommonRestService {

  private readonly serviceUrl = environment.apiUrl + "service";
  constructor(injector: Injector) {
    super(injector);
  }

  public getServices() {
    return this.get<Service[]>(this.serviceUrl);
  }

  public addService(service: Service) {
    return this.post<Service>(this.serviceUrl, service);
  }

  public updateService(service: Service) {
    return this.put<Service>(`${this.serviceUrl}/${service.id}`, service);
  }

  public deleteService(id: string) {
    return this.delete<Service>(`${this.serviceUrl}/${id}`)
  }
}
