import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextInputComponent} from "./text-input.component";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
    declarations: [TextInputComponent],
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule
    ],
    exports: [TextInputComponent]
})
export class TextInputModule {
}
