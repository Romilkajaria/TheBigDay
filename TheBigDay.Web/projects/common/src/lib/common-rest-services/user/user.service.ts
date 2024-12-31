import {Injectable, Injector} from '@angular/core';
import {BaseCommonRestService} from "../base-common-rest-service.service";
import {environment} from "../../environments/environment";
import {User} from "../../common-rest-models/user";

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseCommonRestService {

    private readonly userUrl = environment.apiUrl + "customer";

    constructor(injector: Injector) {
        super(injector);
    }

    public updateUserProfile(user: User) {
        return this.http.put(this.userUrl, user);
    }
}
