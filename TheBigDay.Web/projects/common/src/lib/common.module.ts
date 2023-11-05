import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import {CommonLoginComponent} from "./login/login.page";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [
    CommonComponent,
    CommonLoginComponent
  ],
  imports: [
    CheckboxModule,
    ButtonModule,
    RippleModule,
    InputTextModule
  ],
  exports: [
    CommonComponent,
    CommonLoginComponent
  ]
})
export class CommonModule { }
