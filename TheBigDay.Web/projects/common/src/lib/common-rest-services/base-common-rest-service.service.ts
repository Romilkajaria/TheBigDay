import {Injectable, Injector} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class BaseCommonRestService {

    public http: HttpClient;

    constructor(injector: Injector) {
        this.http = injector.get(HttpClient);
    }
}
