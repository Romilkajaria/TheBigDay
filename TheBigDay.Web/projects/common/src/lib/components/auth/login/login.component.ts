import { Component } from '@angular/core';
import {LayoutService} from "../../../layout/service/app.layout.service";
import {Store} from "../../../common-rest-models/store";
import {AuthorizeService} from "./authorize.service";
import {Router} from "@angular/router";
import {LoginModel, RegisterStoreModel} from "../../../common-rest-models/authentication-models";
import {StoreService} from "../../../common-rest-services/store/store-service.service";
import {switchMap} from "rxjs";
import {MessageService} from "primeng/api";
import {getToastMessage, ToastMessageType} from "../../../helpers/toastMessages";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [MessageService]
})
export class LoginComponent {

    registerModel: RegisterStoreModel = {user: {}};
    loginModel: LoginModel = {email: undefined, password: undefined};
    confirmPassword?: string
    isSigningUp = false
    vendor?: Store;

    public loading = false;

    constructor(public layoutService: LayoutService,
                private authService: AuthorizeService,
                private messageService: MessageService,
                private router: Router) {}

    toggleSignup() {
        this.isSigningUp = !this.isSigningUp;
        this.messageService.clear();
    }

    login() {
        this.loading = true;
        this.messageService.clear();
        this.authService.signIn(this.loginModel.email!, this.loginModel.password!
        ).subscribe({
            next: () => this.router.navigate(['']),
            error: (e) => {
                this.messageService.add(getToastMessage(ToastMessageType.ERROR, "Failed to login. Please try again or do forgot password.", false));
                this.loading = false;
            },
        });
    }

    register() {
        this.loading = true;
        this.messageService.clear();
        this.authService.registerStore(this.registerModel).pipe(
            switchMap(() => this.authService.signIn(this.registerModel.user.email!, this.registerModel.user.password!))
        ).subscribe({
            next: () => this.router.navigate(['']),
            error: () => {
                this.messageService.add(getToastMessage(ToastMessageType.ERROR, "Failed to login. Please try again or do forgot password."));
                this.loading = false;
            },
        });
    }

    get registerDisabled() {
        return !this.registerModel.user.email ||
            !this.registerModel.user.password ||
            !this.confirmPassword ||
            this.confirmPassword !== this.registerModel.user.password ||
            !this.registerModel.user.firstName ||
            !this.registerModel.user.lastName ||
            !this.registerModel.user.tcAccepted;


    }
}
