import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable, Subject, catchError, map, of } from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class AuthorizeService {

    constructor(private http: HttpClient) { }

    private _authStateChanged: Subject<boolean> = new BehaviorSubject<boolean>(false);

    public onStateChanged() {
        return this._authStateChanged.asObservable();
    }

    // cookie-based login
    public signIn(email: string, password: string) {
        return this.http.post(environment.authUrl + '/login?useCookies=true', {
            email: email,
            password: password
        }, {
            observe: 'response',
            responseType: 'text',
        })
            .pipe<boolean>(map((res: HttpResponse<string>) => {
                this._authStateChanged.next(res.ok);
                return res.ok;
            }));
    }

    // register new user
    public register(email: string, password: string) {
        return this.http.post(environment.authUrl + '/register', {
            email: email,
            password: password
        }, {
            observe: 'response',
            responseType: 'text'
        })
            .pipe<boolean>(map((res: HttpResponse<string>) => {
                return res.ok;
            }));
    }

    // sign out
    public signOut() {
        return this.http.post(environment.authUrl + '/logout', {}, {
            withCredentials: true,
            observe: 'response',
            responseType: 'text'
        }).pipe<boolean>(map((res: HttpResponse<string>) => {
            if (res.ok) {
                this._authStateChanged.next(false);
            }
            return res.ok;
        }));
    }

    // check if the user is authenticated. the endpoint is protected so 401 if not.
    public user() {
        return this.http.get<UserInfo>(environment.authUrl + '/manage/info', {
            withCredentials: true
        }).pipe(
            catchError((_: HttpErrorResponse, __: Observable<UserInfo>) => {
                return of({} as UserInfo);
            }));
    }

    // is signed in when the call completes without error and the user has an email
    public isSignedIn(): Observable<boolean> {
        return this.user().pipe(
            map((userInfo) => {
                const valid = !!(userInfo && userInfo.email && userInfo.email.length > 0);
                return valid;
            }),
            catchError((_) => {
                return of(false);
            }));
    }
}

// login and register
export interface UserDto {
    email: string;
    password: string;
}

// manage/info
export interface UserInfo {
    email: string;
    isEmailConfirmed: boolean;
}
