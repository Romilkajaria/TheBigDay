import {NgModule} from '@angular/core';
import {AsyncPipe, LocationStrategy, NgForOf, PathLocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from '../../../common/src/lib/layout/app.layout.module';
import {LoginModule} from "../../../common/src/lib/components/auth/login/login.module";
import {VendorPageShellComponent} from './vendor-page-shell/vendor-page-shell.component';
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {StyleClassModule} from "primeng/styleclass";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthModule} from "@auth0/auth0-angular";
import {environment} from "../../../common/src/lib/environments/environment";

@NgModule({
    declarations: [
        AppComponent,
        VendorPageShellComponent,
        LoginPageComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        LoginModule,
        NgForOf,
        RippleModule,
        SharedModule,
        StyleClassModule,
        AuthModule.forRoot(environment.auth0),
        AsyncPipe,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
