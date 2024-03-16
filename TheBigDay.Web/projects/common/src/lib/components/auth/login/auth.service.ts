import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    public login(email: string, password: string) {
        return this.http.post(environment.authUrl + 'login?useCookies=true', {email, password})
    }

    public logout() {
        return this.http.post(environment.authUrl + 'logout', {})
    }
}
