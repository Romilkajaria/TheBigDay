import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import {BehaviorSubject, Observable, Subject, catchError, map, of, switchMap, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {RegisterModel} from "../../../common-rest-models/authentication-models";

@Injectable({
    providedIn: 'root',
})
export class AuthorizeService {

    constructor(private http: HttpClient, private router: Router) { }

    private _authStateChanged: Subject<boolean> = new BehaviorSubject<boolean>(false);

    public onStateChanged() {
        return this._authStateChanged.asObservable();
    }

    // cookie-based login
    public signIn(email: string, password: string) {
        return this.http.post(environment.apiUrl + 'store/authenticate/login', {
            email: email,
            password: password
        }, {
            observe: 'response',
        })
            .pipe<boolean>(map((res: HttpResponse<any>) => {
                this.setToken(res.body.token);
                this._authStateChanged.next(res.ok);
                return res.ok;
            }));
    }

    // register new user
    public register(registerModel: RegisterModel) {
        return this.http.post(environment.apiUrl + 'store/authenticate/register', registerModel, {
            observe: 'response',
            responseType: 'text'
        })
            .pipe<boolean>(map((res: HttpResponse<string>) => {
                return res.ok;
            }));
    }

    // sign out
    public signOut() {
        this.deleteToken();
        this._authStateChanged.next(false);
    }

    // check if the user is authenticated. the endpoint is protected so 401 if not.
    public ping() {
        return this.http.get<any>(environment.apiUrl + 'store/authenticate/ping').pipe(
            tap((isSignedIn) => {
                if(!isSignedIn) {
                    this.signOut();
                }
            }),
            catchError((_: HttpErrorResponse, __: Observable<any>) => {
                return of(false);
            }));
    }

    public getToken() {
        return localStorage.getItem('token')
    }

    private setToken(token: string) {
        localStorage.setItem('token', token)
    }

    private deleteToken() {
        localStorage.removeItem('token')
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
