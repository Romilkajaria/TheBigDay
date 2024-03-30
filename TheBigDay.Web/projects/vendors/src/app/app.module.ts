import {NgModule} from '@angular/core';
import {AsyncPipe, CommonModule, LocationStrategy, NgForOf, PathLocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from '../../../common/src/lib/layout/app.layout.module';
import {LoginModule} from "../../../common/src/lib/components/auth/login/login.module";
import {VendorPageShellComponent} from './vendor-page-shell/vendor-page-shell.component';
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {StyleClassModule} from "primeng/styleclass";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthGuard, AuthModule, AuthService} from "@auth0/auth0-angular";
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {AuthInterceptor} from "./VendorAuthInterceptor";
import {Router} from "@angular/router";

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
        RippleModule,
        SharedModule,
        StyleClassModule,
        AuthModule.forRoot(environment.auth0),
        CommonModule,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useFactory: (router: Router) => {
            return new AuthInterceptor(router);
        },
        multi: true,
        deps: [Router]
    },
        AuthGuard,
        AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
