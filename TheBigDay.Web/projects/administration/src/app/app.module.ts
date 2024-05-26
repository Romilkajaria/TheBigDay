import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {AdminPageShellComponent} from "./admin-page-shell/admin-page-shell.component";
import {AvatarModule} from "primeng/avatar";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {AppLayoutModule} from "../../../common/src/lib/layout/app.layout.module";

@NgModule({
    declarations: [
        AppComponent,
        AdminPageShellComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy},
    ],
    imports: [
        RouterOutlet,
        BrowserModule,
        RouterLink,
        AvatarModule,
        RippleModule,
        StyleClassModule,
        AppLayoutModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
