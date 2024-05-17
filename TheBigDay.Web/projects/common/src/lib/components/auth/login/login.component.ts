import { Component } from '@angular/core';
import {LayoutService} from "../../../layout/service/app.layout.service";
import {Vendor} from "../../../common-rest-models/vendor";
import {AuthorizeService} from "./authorize.service";
import {Router} from "@angular/router";
import {LoginModel, RegisterStoreModel} from "../../../common-rest-models/authentication-models";
import {CommonVendorService} from "../../../common-rest-services/vendors/common-vendor-service.service";
import {switchMap} from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    registerModel: RegisterStoreModel = {user: {}};
    loginModel: LoginModel = {email: undefined, password: undefined};
    confirmPassword?: string
    isSigningUp = false
    vendor?: Vendor;

    public loading = false;

    constructor(public layoutService: LayoutService,
                private authService: AuthorizeService,
                private vendorService: CommonVendorService,
                private router: Router) {}

    toggleSignup() {
        this.isSigningUp = !this.isSigningUp
    }

    login() {
        this.loading = true;
        this.authService.signIn(this.loginModel.email!, this.loginModel.password!).subscribe(async () => {
            this.loading = false;
            await this.router.navigate([''])
        })
    }

    register() {
        this.loading = true;
        this.authService.registerStore(this.registerModel).pipe(
            switchMap(() => this.authService.signIn(this.registerModel.user.email!, this.registerModel.user.password!))
        ).subscribe(async () => {
            await this.router.navigate(['']);
        })
    }
}
