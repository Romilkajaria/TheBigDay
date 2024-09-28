import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorComponent} from "./editor.component";
import {FormsModule} from "@angular/forms";
import {EditorModule} from "primeng/editor";


@NgModule({
    declarations: [EditorComponent],
    imports: [
        CommonModule,
        EditorModule,
        FormsModule
    ],
    exports: [EditorComponent]
})
export class LibEditorModule {
}
