import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NumberInputComponent} from "./number-input.component";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";


@NgModule({
    declarations: [NumberInputComponent],
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        InputNumberModule
    ],
    exports: [NumberInputComponent]
})
export class NumberInputModule {
}
