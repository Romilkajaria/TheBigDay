import { Component } from '@angular/core';
import {LayoutService} from "../../../layout/service/app.layout.service";
import {Vendor} from "../../../common-rest-models/vendor";
import {AuthorizeService} from "./authorize.service";
import {Router} from "@angular/router";
import {LoginModel, RegisterStoreModel} from "../../../common-rest-models/authentication-models";
import {MenuItem} from "primeng/api";
import {CommonVendorService} from "../../../common-rest-services/vendors/common-vendor-service.service";
import {switchMap} from "rxjs";

export enum RegisterSteps {
    YOU,
    STORE,
    CONFIRMATION
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    registerModel: RegisterStoreModel = {user: {}, store: {}};
    loginModel: LoginModel = {email: undefined, password: undefined};
    confirmPassword?: string
    isSigningUp = false
    vendor?: Vendor;
    steps: MenuItem[] = [{
        label: 'You'
    }, {
        label: 'Store'
    }, {
        label: 'Confirm'
    }];

    RegisterSteps = RegisterSteps;
    activeIndex = RegisterSteps.YOU;
    maxDob = new Date();

    constructor(public layoutService: LayoutService,
                private authService: AuthorizeService,
                private vendorService: CommonVendorService,
                private router: Router) {
        this.maxDob.setFullYear(new Date().getFullYear() - 18);
    }

    toggleSignup() {
        this.isSigningUp = !this.isSigningUp
    }

    login() {
        this.authService.signIn(this.loginModel.email!, this.loginModel.password!).subscribe(async (x) => {
            await this.router.navigate([''])
        })
    }

    register() {
        this.authService.registerAdmin(this.registerModel).pipe(
            switchMap(() => this.authService.signIn(this.registerModel.user.email!, this.registerModel.user.password!))
        ).subscribe(async () => {
            await this.router.navigate(['']);
        })
    }

    nextStep() {
        this.activeIndex++;
    }

    previousStep() {
        this.activeIndex--;
    }
}
