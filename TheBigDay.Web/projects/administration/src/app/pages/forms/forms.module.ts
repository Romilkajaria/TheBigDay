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
import {FormsModule as AngularFormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";
import {CheckboxModule} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {AccordionModule} from "primeng/accordion";
import {DividerModule} from "primeng/divider";
import {BadgeModule} from "primeng/badge";
import {EditorModule} from "primeng/editor";


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
        ToastModule,
        AngularFormsModule,
        RadioButtonModule,
        CheckboxModule,
        DropdownModule,
        AccordionModule,
        DividerModule,
        BadgeModule,
        EditorModule,
    ]
})
export class FormsModule { }
