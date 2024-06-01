import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventCategoryRoutingModule } from './event-category-routing.module';
import {EventCategoryComponent} from "./event-category.component";
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextModule} from "primeng/inputtext";
import {ListboxModule} from "primeng/listbox";
import {MessagesModule} from "primeng/messages";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {SplitterModule} from "primeng/splitter";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [EventCategoryComponent],
    imports: [
        CommonModule,
        EventCategoryRoutingModule,
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
        FormsModule
    ]
})
export class EventCategoryModule { }
