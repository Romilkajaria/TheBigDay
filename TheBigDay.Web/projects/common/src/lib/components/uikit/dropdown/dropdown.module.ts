import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from "./dropdown.component";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
    declarations: [DropdownComponent],
    imports: [
        CommonModule,
        FormsModule,
        DropdownModule,
    ],
    exports: [DropdownComponent]
})
export class CommonDropdownModule {
}
