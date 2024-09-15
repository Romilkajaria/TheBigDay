import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from '../../../common/src/lib/layout/app.layout.module';
import {LoginModule} from "../../../common/src/lib/components/auth/login/login.module";
import {VendorPageShellComponent} from './vendor-page-shell/vendor-page-shell.component';
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {StyleClassModule} from "primeng/styleclass";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./VendorAuthInterceptor";
import {Router} from "@angular/router";
import {AvatarModule} from "primeng/avatar";

@NgModule({
    declarations: [
        AppComponent,
        VendorPageShellComponent,
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        LoginModule,
        RippleModule,
        SharedModule,
        StyleClassModule,
        CommonModule,
        AvatarModule,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useFactory: (router: Router) => {
            return new AuthInterceptor(router);
        },
        multi: true,
        deps: [Router]
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
