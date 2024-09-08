import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioButtonsComponent} from "./radiobuttons.component";
import {FormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";


@NgModule({
    declarations: [RadioButtonsComponent],
    imports: [
        CommonModule,
        RadioButtonModule,
        FormsModule,
    ],
    exports: [RadioButtonsComponent],
})
export class RadioButtonsModule {
}
