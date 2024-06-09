import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from "./products-routing.module";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {SliderModule} from "primeng/slider";
import {ProgressBarModule} from "primeng/progressbar";
import {FormsModule} from "@angular/forms";
import {AddProductFormComponent} from './add-product-form/add-product-form.component';
import {EditorModule} from "primeng/editor";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CheckboxModule} from "primeng/checkbox";
import {InputSwitchModule} from "primeng/inputswitch";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {LoadingModule} from "../../../../../common/src/lib/components/loading/loading/loading.module";
import {RippleModule} from "primeng/ripple";


@NgModule({
    declarations: [
        ProductsComponent,
        AddProductFormComponent
    ],
    exports: [
        ProductsComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        //prime modules
        ButtonModule,
        InputTextModule,
        TableModule,
        MultiSelectModule,
        DropdownModule,
        SliderModule,
        ProgressBarModule,
        FormsModule,
        EditorModule,
        InputNumberModule,
        InputTextareaModule,
        CheckboxModule,
        InputSwitchModule,
        ToastModule,
        ConfirmDialogModule,
        LoadingModule,
        RippleModule
    ]
})
export class ProductsModule { }
