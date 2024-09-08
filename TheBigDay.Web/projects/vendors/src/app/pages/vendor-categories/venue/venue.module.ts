import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VenueComponent} from './venue.component';
import {VenueRoutingModule} from "./venue-routing.module";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {MultiSelectModule} from "primeng/multiselect";
import {SliderModule} from "primeng/slider";
import {ProgressBarModule} from "primeng/progressbar";
import {FormsModule} from "@angular/forms";
import {AddVenueComponent} from './add-venue/add-venue.component';
import {EditorModule} from "primeng/editor";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CheckboxModule} from "primeng/checkbox";
import {InputSwitchModule} from "primeng/inputswitch";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {LoadingModule} from "../../../../../../common/src/lib/components/loading/loading/loading.module";
import {StepsModule} from "primeng/steps";
import {NumberInputModule} from "../../../../../../common/src/lib/components/uikit/number-input/number-input.module";
import {CommonDropdownModule} from "../../../../../../common/src/lib/components/uikit/dropdown/dropdown.module";
import {RadioButtonsModule} from "../../../../../../common/src/lib/components/uikit/radiobuttons/radiobuttons.module";


@NgModule({
    declarations: [
        VenueComponent,
        AddVenueComponent
    ],
    exports: [
        VenueComponent
    ],
    imports: [
        CommonModule,
        VenueRoutingModule,
        //prime modules
        ButtonModule,
        InputTextModule,
        TableModule,
        MultiSelectModule,
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
        RippleModule,
        StepsModule,
        NumberInputModule,
        CommonDropdownModule,
        RadioButtonsModule,
        FormsModule
    ]
})
export class VenueModule {
}
