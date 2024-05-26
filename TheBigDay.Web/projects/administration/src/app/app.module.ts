import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {AdminPageShellComponent} from "./admin-page-shell/admin-page-shell.component";
import {AvatarModule} from "primeng/avatar";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {AppLayoutModule} from "../../../common/src/lib/layout/app.layout.module";
import {SharedModule} from "primeng/api";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthInterceptor} from "../../../vendors/src/app/VendorAuthInterceptor";
import {AuthGuard, AuthService} from "@auth0/auth0-angular";

@NgModule({
    declarations: [
        AppComponent,
        AdminPageShellComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useFactory: (router: Router) => {
                return new AuthInterceptor(router);
            },
            multi: true,
            deps: [Router]
        },
        AuthGuard,
        AuthService
    ],
    imports: [
        SharedModule,
        BrowserModule,
        AvatarModule,
        RippleModule,
        AppRoutingModule,
        StyleClassModule,
        AppLayoutModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
