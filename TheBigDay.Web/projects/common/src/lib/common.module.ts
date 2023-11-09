import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import {CommonLoginComponent} from "./login/login.page";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {CommonModule as AngularCommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import {MenuModule} from "primeng/menu";


@NgModule({
  declarations: [
    CommonComponent,
    CommonLoginComponent,
    MenuComponent
  ],
  imports: [
    CheckboxModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    AngularCommonModule,
    FormsModule,
    MenuModule
  ],
  exports: [
    CommonComponent,
    CommonLoginComponent,
    MenuComponent,
  ]
})
export class CommonModule { }
