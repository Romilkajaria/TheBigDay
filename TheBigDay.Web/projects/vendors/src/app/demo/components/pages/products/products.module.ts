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
  ]
})
export class ProductsModule { }
