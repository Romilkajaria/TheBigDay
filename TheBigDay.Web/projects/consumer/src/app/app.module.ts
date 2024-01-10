import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from "../../../common/src/lib/components/auth/login/login.module";
import {CommonModule, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {ConsumerPageShellComponent} from './consumer-page-shell/consumer-page-shell.component';
import {AppLayoutModule} from "../../../common/src/lib/layout/app.layout.module";
import {RouterModule} from "@angular/router";
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";

@NgModule({
    declarations: [
        AppComponent,
        ConsumerPageShellComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        AppLayoutModule,
        LoginModule,
        AvatarModule,
        ButtonModule,
        RippleModule,
        SharedModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
