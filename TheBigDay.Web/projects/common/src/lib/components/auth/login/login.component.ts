import { Component } from '@angular/core';
import {LayoutService} from "../../../layout/service/app.layout.service";
import {Vendor} from "../../../common-rest-models/vendor";
import {AuthorizeService} from "./authorize.service";
import {Router} from "@angular/router";
import {LoginModel, RegisterModel} from "../../../common-rest-models/authentication-models";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    registerModel!: RegisterModel;
    loginModel!: LoginModel;
    confirmPassword?: string
    isSigningUp = false
    vendor?: Vendor;

    constructor(public layoutService: LayoutService,
                private authService: AuthorizeService,
                private router: Router) {
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
        this.authService.register(this.registerModel).subscribe(async () => {
            await this.router.navigate(['']);
        })
    }
}
