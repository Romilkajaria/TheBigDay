import {Injectable, Injector} from '@angular/core';
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseCommonRestService {

    private readonly customerUrl = environment.apiUrl + "customer";
    constructor(injector: Injector) {
        super(injector);
    }
}
