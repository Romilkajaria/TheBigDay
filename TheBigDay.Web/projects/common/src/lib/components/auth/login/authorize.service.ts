import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import {BehaviorSubject, Subject, map, tap, switchMap, of} from "rxjs";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {RegisterStoreModel} from "../../../common-rest-models/authentication-models";
import {Customer} from "../../../common-rest-models/customer";
import {CommonVendorService} from "../../../common-rest-services/vendors/common-vendor-service.service";
import {LocalStorageService} from "../../../common-services/local-storage-service/local-storage.service";
import {Vendor} from "../../../common-rest-models/vendor";

@Injectable({
    providedIn: 'root',
})
export class AuthorizeService {

    constructor(private http: HttpClient,
                private router: Router,
                private storeService: CommonVendorService,
                private cacheService: LocalStorageService) {}

    private _authStateChanged: Subject<boolean> = new BehaviorSubject<boolean>(false);
    private _user: Subject<Customer | undefined> = new BehaviorSubject<Customer | undefined>(undefined)
    private readonly authUrl = environment.apiUrl + 'store/authenticate/';
    public static readonly  tokenKey = 'token'
    public static readonly  storeKey = 'store'
    public current: Customer | undefined;

    public initialise() {
        return this.ping().pipe(
            switchMap((user) => {
                this._user.next(user);
                this.current = user;
                this._authStateChanged.next(true);
                if(this.current && this.current.storeId) {
                    return this.storeService.getVendor(this.current.storeId)
                }
                return of(false)
            }),
            tap((value) => {
                if(value && this.current && this.current.storeId) {
                    this.current.store = value as Vendor;
                }
            })
        );
    }

    public onStateChanged() {
        return this._authStateChanged.asObservable();
    }

    public get user$() {
        return this._user.asObservable();
    }

    public getUser() {
    }

    // token-based login
    public signIn(email: string, password: string) {
        return this.http.post( this.authUrl + 'login', {
            email: email,
            password: password
        }, {
            observe: 'response',
        }).pipe(
            map((res: HttpResponse<any>) => {
                this.cacheService.setItem(AuthorizeService.tokenKey, res.body.token)
                this._authStateChanged.next(res.ok);
                this._user.next(res.body.user);
                this.current = res.body.user;
                return res.ok;
            }),
            switchMap((res) => {
                if(this.current && this.current.storeId) {
                    return this.storeService.getVendor(this.current.storeId);
                }
                return of(res);
            }),
            switchMap((store) => {
                if(store) {
                    if(this.current && this.current.storeId) {
                        this.current.store = store as Vendor;
                    }
                    this.cacheService.setItem(AuthorizeService.storeKey, JSON.stringify(store));
                }
                return of(store)
            }));
    }

    // register new user
    public register(registerModel: RegisterStoreModel) {
        return this.http.post(this.authUrl + 'register', registerModel, {
            observe: 'response',
            responseType: 'text'
        })
            .pipe<boolean>(map((res: HttpResponse<string>) => {
                return res.ok;
            }));
    }

    public registerAdmin(registerModel: RegisterStoreModel) {
        return this.http.post(this.authUrl + 'register-admin', registerModel, {
            observe: 'response',
            responseType: 'text'
        })
            .pipe<boolean>(map((res: HttpResponse<string>) => {
                return res.ok;
            }));
    }

    // sign out
    public signOut() {
        this.cacheService.clearStorage()
        this._authStateChanged.next(false);
        this._user.next(undefined);
        this.router.navigate(['/auth']);
    }

    // check if the user is authenticated. the endpoint is protected so 401 if not.
    public ping() {
        return this.http.get<Customer | undefined>(environment.apiUrl + 'user/ping');
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
