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
import {LandingComponent} from "./pages/landing/landing.component";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import { LoginSignupDialogComponent } from './pages/landing/login-signup-dialog/login-signup-dialog.component';
import {DropdownModule} from "primeng/dropdown";

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        ConsumerPageShellComponent,
        LoginSignupDialogComponent
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
        InputTextModule,
        CalendarModule,
        FormsModule,
        DropdownModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
