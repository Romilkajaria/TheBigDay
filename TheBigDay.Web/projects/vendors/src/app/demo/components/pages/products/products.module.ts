import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {ProductsRoutingModule} from "./products-routing.module";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {SliderModule} from "primeng/slider";
import {ProgressBarModule} from "primeng/progressbar";
import {FormsModule} from "@angular/forms";
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import {EditorModule} from "primeng/editor";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CheckboxModule} from "primeng/checkbox";
import {InputSwitchModule} from "primeng/inputswitch";
import {ToastModule} from "primeng/toast";



@NgModule({
  declarations: [
    ProductsComponent,
    AddProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
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
  ]
})
export class ProductsModule { }
