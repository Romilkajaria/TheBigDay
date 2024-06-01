import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCategoryRoutingModule } from './item-category-routing.module';
import {ItemCategoryComponent} from "./item-category.component";
import {MessagesModule} from "primeng/messages";
import {SharedModule} from "primeng/api";
import {DividerModule} from "primeng/divider";
import {SplitterModule} from "primeng/splitter";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ListboxModule} from "primeng/listbox";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";


@NgModule({
  declarations: [ItemCategoryComponent],
    imports: [
        CommonModule,
        ItemCategoryRoutingModule,
        MessagesModule,
        SharedModule,
        DividerModule,
        SplitterModule,
        ButtonModule,
        RippleModule,
        ListboxModule,
        FormsModule,
        InputTextModule,
        ToastModule,
        ConfirmDialogModule
    ]
})
export class ItemCategoryModule { }
