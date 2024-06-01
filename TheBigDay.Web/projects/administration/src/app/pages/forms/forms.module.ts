import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import {FormsComponent} from "./forms.component";
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextModule} from "primeng/inputtext";
import {ListboxModule} from "primeng/listbox";
import {MessagesModule} from "primeng/messages";
import {ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {SplitterModule} from "primeng/splitter";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [FormsComponent],
    imports: [
        CommonModule,
        FormsRoutingModule,
        ButtonModule,
        ConfirmDialogModule,
        InputTextModule,
        ListboxModule,
        MessagesModule,
        ReactiveFormsModule,
        RippleModule,
        SharedModule,
        SplitterModule,
        ToastModule
    ]
})
export class FormsModule { }
