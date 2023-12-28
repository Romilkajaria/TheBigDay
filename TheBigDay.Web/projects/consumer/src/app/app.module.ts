import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {LoginModule} from "../../../common/src/lib/components/auth/login/login.module";
import {AppLayoutModule} from "../../../common/src/lib/layout/app.layout.module";
import {NotfoundComponent} from "../../../common/src/lib/components/notfound/notfound.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { ConsumerPageShellComponent } from './consumer-page-shell/consumer-page-shell.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NotfoundComponent,
    ConsumerPageShellComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      AppLayoutModule,
        // CommonModule,
        // CheckboxModule,
        // InputTextModule,
        // ButtonModule,
        // RippleModule,
        LoginModule,
    ],
    providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
