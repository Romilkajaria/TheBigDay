import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from "../../../common/src/lib/components/auth/login/login.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {ConsumerPageShellComponent} from './consumer-page-shell/consumer-page-shell.component';
import {AppLayoutModule} from "../../../common/src/lib/layout/app.layout.module";

@NgModule({
    declarations: [
        AppComponent,
        ConsumerPageShellComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppLayoutModule,
        LoginModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
