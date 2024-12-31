import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxComponent} from "./checkbox.component";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    declarations: [CheckboxComponent],
    imports: [
        CommonModule,
        CheckboxModule,
        FormsModule,
        BrowserModule
    ],
    exports: [CheckboxComponent]
})
export class CommonCheckboxModule {
}
