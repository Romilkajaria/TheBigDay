import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from "../../../common/src/lib/common.module";
import { LoginPageComponent } from './login-page/login-page.component';
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
