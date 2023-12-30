import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesComponent} from './services.component';
import {ServicesRoutingModule} from "./services-routing.module";
import {AddServicesFormComponent} from './add-services-form/add-services-form.component';
import {EditorModule} from "primeng/editor";
import {InputNumberModule} from "primeng/inputnumber";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {SliderModule} from "primeng/slider";
import {ProgressBarModule} from "primeng/progressbar";
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CheckboxModule} from "primeng/checkbox";
import {InputSwitchModule} from "primeng/inputswitch";
import {LoadingModule} from "../../../../../common/src/lib/components/loading/loading/loading.module";


@NgModule({
    declarations: [
        ServicesComponent,
        AddServicesFormComponent
    ],
    imports: [
        CommonModule,
        ServicesRoutingModule,
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
        LoadingModule
    ]
})
export class ServicesModule { }
