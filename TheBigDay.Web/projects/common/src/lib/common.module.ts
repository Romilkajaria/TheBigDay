import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {CommonModule as AngularCommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';
import {MenuModule} from "primeng/menu";
import { LogoutComponent } from './components/auth/logout/logout.component';


@NgModule({
  declarations: [
    CommonComponent,
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
  ]
})
export class CommonModule { }
