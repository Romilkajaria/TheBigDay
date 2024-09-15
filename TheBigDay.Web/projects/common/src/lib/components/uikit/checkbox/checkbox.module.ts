import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxComponent} from "./checkbox.component";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [CheckboxComponent],
    imports: [
        CommonModule,
        CheckboxModule,
        FormsModule,
    ],
    exports: [CheckboxComponent]
})
export class CommonCheckboxModule {
}
