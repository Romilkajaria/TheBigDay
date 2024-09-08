import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from "./dropdown.component";
import {DropdownModule as PrimeDropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [DropdownComponent],
    imports: [
        CommonModule,
        FormsModule,
        PrimeDropdownModule,
    ],
    exports: [DropdownComponent]
})
export class CommonDropdownModule {
}
