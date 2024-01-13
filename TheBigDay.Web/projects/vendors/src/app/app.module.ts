import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy, NgForOf} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from '../../../common/src/lib/layout/app.layout.module';
import {LoginModule} from "../../../common/src/lib/components/auth/login/login.module";
import {VendorPageShellComponent} from './vendor-page-shell/vendor-page-shell.component';
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {StyleClassModule} from "primeng/styleclass";

@NgModule({
    declarations: [
        AppComponent, VendorPageShellComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        LoginModule,
        NgForOf,
        RippleModule,
        SharedModule,
        StyleClassModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
